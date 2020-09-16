/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

interface Params{
  callback: (Items: []) => void;
}
// get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
const getStaffDoc = async (callback: Params): void => {
  const staffListDoc = await firestore()
    .collection('staff')
    .doc('FJvffUXA8ZY4ivLwrpKD')
    .get()
    .then((item) => item.data())
    .catch(console.error);

  callback(staffListDoc['staff-list']);
};

const setStaffDoc = (updateData: Array<Record<string, unknown>>): void => {
  firestore()
    .collection('staff')
    .doc('FJvffUXA8ZY4ivLwrpKD')
    .update({ 'staff-list': updateData })
    .catch(console.error);
};

const getReservationDoc = async (callback: Params): void => {
  const reservationListDoc = await firestore()
    .collection('user-reservation')
    .doc('IBrKfuVZdkesTwqcZHna')
    .get()
    .then((item) => item.data())
    .catch(console.error);

  callback(reservationListDoc['reservation-list']);
};

const setReservationDoc = (updateData: Array<Record<string, unknown>>): void => {
  firestore()
    .collection('user-reservation')
    .doc('IBrKfuVZdkesTwqcZHna')
    .update({ 'reservation-list': updateData })
    .catch(console.error);
};

export {
  setStaffDoc, getStaffDoc, getReservationDoc, setReservationDoc,
};
