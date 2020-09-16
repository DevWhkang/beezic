/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { AssignmentModelTypes } from './@types/AssignmentModel';

const AssignmentModel: AssignmentModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getStaffDoc(callback) {
    const staffListDoc = await firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .get()
      .then((item) => item.data())
      .catch(console.error);

    callback(staffListDoc['staff-list']);
  },
  setStaffDoc(updateData: Array<Record<string, unknown>>): void {
    firestore()
      .collection('staff')
      .doc('FJvffUXA8ZY4ivLwrpKD')
      .update({ 'staff-list': updateData })
      .catch(console.error);
  },
  async getReservationDoc(callback: Params): void {
    const reservationListDoc = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .catch(console.error);

    callback(reservationListDoc['reservation-list']);
  },
  setReservationDoc(updateData: Array<Record<string, unknown>>): void {
    firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData })
      .catch(console.error);
  },
};

export default AssignmentModel;
