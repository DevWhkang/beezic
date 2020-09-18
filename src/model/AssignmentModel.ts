/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { AssignmentStore } from '../viewModel';
import { AssignmentModelTypes, StaffListDocTypes } from './@types/AssignmentModel';

const AssignmentModel: AssignmentModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getStaffDoc(callback) {
    const staffListDoc: StaffListDocTypes = await firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .get()
      .then((item) => item.data())
      .catch(console.error);

    callback(staffListDoc['staff-list']);
  },
  async setStaffDoc(updateData) {
    const result = await firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .update({ 'staff-list': updateData })
      .then(() => true)
      .catch(console.error);
    console.log('3', result);
    if (result === true) {
      AssignmentStore.toggleIsUpdateStaffsList();
    }
  },
  async getReservationDoc(callback) {
    const reservationListDoc = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .catch(console.error);

    callback(reservationListDoc['reservation-list']);
  },
  async setReservationDoc(updateData) {
    const result = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData })
      .then(() => true)
      .catch(console.error);
    console.log('2', result);
    if (result === true) {
      AssignmentStore.toggleIsAssignment();
    }
  },
};

export default AssignmentModel;
