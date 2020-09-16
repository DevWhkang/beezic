import { observable } from 'mobx';
import {
  setStaffDoc, getStaffDoc, getReservationDoc, setReservationDoc,
} from '../model/AssignmentModel';
import UserStore from './UserStore';
import ChatBotStore from './ChatBotStore';

interface IAssignmentStore {
  isAssignment: boolean;
  selectedStaff: Record<string, Record<string, unknown>>;
  staffs: [];
  setSelectedStaff: () => void;
  setAssignmentStaff: () => void;
  initAssignmentState: () => void;
}

const AssignmentStore: IAssignmentStore = observable({
  isAssignment: false,
  staffs: [],
  selectedStaff: {},

  // 임시로 랜덤하게 배정
  initAssignmentState() {
    this.isAssignment = false;
    this.staffs = [];
    this.selectedStaff = {};
  },

  setSelectedStaff() {
    const shuffled = this.staffs
      .map((a) => ([Math.random(), a]))
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

    this.selectedStaff = shuffled[0];
  },

  setAssignmentStaff() {
    getStaffDoc((staffList: []) => {
      this.staffs = staffList;
      this.setSelectedStaff();

      getReservationDoc((dataArray: []) => {
        dataArray.forEach((reservation: Record<string, Record<string, unknown>>) => {
          // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
          // reservation.user.uid === UserStore.user.uid && <- 이 조건 잠시빼봄
          if (reservation.user.uid === UserStore.user.uid
            && reservation.id === ChatBotStore.userFinalData.id) {
            reservation.assignmentStaff = this.selectedStaff.staffProfile;
            staffList.forEach((staff) => {
              if (staff.staffProfile.id === reservation.assignmentStaff.id) {
                staff.assignmentTransaction.push(reservation);
              }
            });
          }
        });
        setReservationDoc(dataArray);
        setStaffDoc(staffList);
        this.isAssignment = !this.isAssignment;
      });
    });
  },
});

export default AssignmentStore;
