/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import '@react-native-firebase/app';
import { AssignmentStore } from '../viewModel';
import { AssignmentModelTypes, StaffListDocTypes } from './@types/AssignmentModel';

const AssignmentModel: AssignmentModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getStaffDoc() {
    return firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .get()
      .then((item) => item.data())
      .then((data) => data['staff-list']);
  },

  async setStaffDoc(updateData) {
    return firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .update({ 'staff-list': updateData });
  },

  async getReservationDoc() {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .then((data) => data['reservation-list']);
  },
  async setReservationDoc(updateData) {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData });
  },
};

export default AssignmentModel;
