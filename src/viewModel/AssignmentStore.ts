/* eslint-disable no-param-reassign */
import { observable } from 'mobx';
import { AssignmentModel } from '../model';
import UserStore from './UserStore';
import ErrorStore from './ErrorStore';
import ChatBotStore from './ChatBotStore';
import { AssignmentStoreTypes } from './@types/AssignmentStore';

const AssignmentStore: AssignmentStoreTypes = observable({
  isTimer: false,
  isModalShown: false,
  isUpdateBoth: false,
  isGetStaffList: false,
  staffs: [],
  selectedStaff: {},
  reservationList: [],
  currentReservation: {},

  toggleModal() {
    AssignmentStore.isModalShown = !AssignmentStore.isModalShown;
  },
  // 임시로 랜덤하게 배정
  initAssignmentState() {
    AssignmentStore.isUpdateBoth = false;
    AssignmentStore.isTimer = false;
    AssignmentStore.isGetStaffList = true;
    AssignmentStore.staffs = [];
    AssignmentStore.reservationList = [];
    AssignmentStore.currentReservation = {};
    AssignmentStore.selectedStaff = {};
  },

  toggleIsTimer() {
    AssignmentStore.isTimer = true;
  },

  toggleIsGetStaffList() {
    AssignmentStore.isGetStaffList = true;
  },

  async assignmentStaff() {
    try {
      await AssignmentStore.setAssignment();
      AssignmentStore.toggleIsUpdateBoth();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async setAssignment() {
    try {
      AssignmentStore.reservationList = await AssignmentModel.getReservationDoc();
      AssignmentStore.reservationList.forEach((reservation) => {
        if (reservation.user.uid === UserStore.user.uid
          && reservation.id === ChatBotStore.userFinalData.id) {
          reservation.assignmentStaffProfile = AssignmentStore.selectedStaff.staffProfile; // 배정시키기
          AssignmentStore.currentReservation = reservation; // 배정시킨 Reservation 상태에 저장
        }
      });
      AssignmentStore.staffs.forEach((staff) => {
        if (staff.staffProfile.id
          === AssignmentStore.currentReservation.assignmentStaffProfile.id) {
          staff.assignmentTransaction.push(AssignmentStore.currentReservation);
        }
      });
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async updateDoc() {
    await AssignmentModel.setReservationDoc(AssignmentStore.reservationList);
    await AssignmentModel.setStaffDoc(AssignmentStore.staffs);
  },

  async getStaffList() {
    try {
      const staffList = await AssignmentModel.getStaffDoc();
      AssignmentStore.staffs = staffList;
      AssignmentStore.setSelectedStaff();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  setSelectedStaff() {
    [AssignmentStore.selectedStaff] = AssignmentStore.staffs
      .map((a) => ([Math.random(), a]))
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  },

  toggleIsUpdateBoth() {
    AssignmentStore.isUpdateBoth = true;
  },

});

export default AssignmentStore;
