/* eslint-disable no-param-reassign */
import { observable } from 'mobx';
import { AssignmentModel } from '../model';
import UserStore from './UserStore';
import ChatBotStore from './ChatBotStore';
import { AssignmentStoreStates } from './@types/AssignmentStore';

const AssignmentStore: AssignmentStoreStates = observable({
  isModalShown: false,
  isAssignment: false,
  isUpdateStaffsList: false,
  staffs: [],
  selectedStaff: {},

  toggleModal() {
    this.isModalShown = !this.isModalShown;
  },
  // 임시로 랜덤하게 배정
  initAssignmentState() {
    this.isAssignment = false;
    this.isUpdateStaffsList = false;
    this.staffs = [];
    this.selectedStaff = {};
  },

  setSelectedStaff() {
    [this.selectedStaff] = this.staffs
      .map((a) => ([Math.random(), a]))
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  },

  toggleIsUpdateStaffsList() {
    this.isUpdateStaffsList = true;
  },

  toggleIsAssignment() {
    this.isAssignment = true;
  },

  setAssignmentStaff() {
    AssignmentModel.getStaffDoc((staffList) => {
      this.staffs = staffList;
      this.setSelectedStaff();
      if (staffList.length !== 0) {
        console.log('Staff List 가져오기 성공');
      }

      AssignmentModel.getReservationDoc((dataArray) => {
        if (dataArray.length !== 0) {
          console.log('Reservation List 가져오기 성공');
        }
        dataArray.forEach((reservation) => {
          // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
          // reservation.user.uid === UserStore.user.uid && <- 이 조건 잠시빼봄
          if (reservation.user.uid === UserStore.user.uid
              && reservation.id === ChatBotStore.userFinalData.id) {
            reservation.assignmentStaff = this.selectedStaff.staffProfile;
            if (reservation.assignmentStaff === this.selectedStaff.staffProfile) {
              console.log('forEach 에서 해당 직거래에 직원 배정 성공');
            }
            staffList.forEach((staff) => {
              if (staff.staffProfile.id === reservation.assignmentStaff.id) {
                staff.assignmentTransaction.push(reservation);
                console.log('forEach 에서 배정된 직원에게 해당 직거래를 배정거래 리스트에 넣기 성공');
              }
            });
          }
        });
        AssignmentModel.setReservationDoc(dataArray);
        AssignmentModel.setStaffDoc(staffList);
      });
    });
  },
});

export default AssignmentStore;
