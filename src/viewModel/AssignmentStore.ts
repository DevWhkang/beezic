/* eslint-disable no-param-reassign */
import { observable } from 'mobx';
import { AssignmentModel } from '../model';
import UserStore from './UserStore';
import ChatBotStore from './ChatBotStore';
import { AssignmentStoreStates } from './@types/AssignmentStore';

const AssignmentStore: AssignmentStoreStates = observable({
  isModalShown: false,
  isUpdateBoth: false,
  isTimer: false,
  isGetStaffList: false,
  staffs: [],
  ReservationList: [],
  currentReservation: {},
  selectedStaff: {},

  toggleModal() {
    this.isModalShown = !this.isModalShown;
  },
  // 임시로 랜덤하게 배정
  initAssignmentState() {
    AssignmentStore.isUpdateBoth = false;
    AssignmentStore.isTimer = false;
    AssignmentStore.isGetStaffList = true;
    AssignmentStore.staffs = [];
    AssignmentStore.ReservationList = [];
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
      console.log(error);
    }
  },

  async setAssignment() {
    try {
      const ReservationList = await AssignmentModel.getReservationDoc();
      AssignmentStore.ReservationList = ReservationList;

      AssignmentStore.ReservationList.forEach((reservation) => {
        if (reservation.user.uid === UserStore.user.uid
          && reservation.id === ChatBotStore.userFinalData.id) {
          reservation.assignmentStaff = AssignmentStore.selectedStaff.staffProfile; // 배정시키기
          AssignmentStore.currentReservation = reservation; // 배정시킨 Reservation 상태에 저장
        }
      });
      AssignmentStore.staffs.forEach((staff) => {
        if (staff.staffProfile.id === AssignmentStore.currentReservation.assignmentStaff.id) {
          staff.assignmentTransaction.push(AssignmentStore.currentReservation);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  async updateDoc() {
    await AssignmentModel.setReservationDoc(AssignmentStore.ReservationList);
    await AssignmentModel.setStaffDoc(AssignmentStore.staffs);
  },

  async getStaffList() {
    try {
      const staffList = await AssignmentModel.getStaffDoc();
      AssignmentStore.staffs = staffList;
      AssignmentStore.setSelectedStaff();
    } catch (error) {
      console.log(error);
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
