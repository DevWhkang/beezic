/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

interface Params{
  callback: (Items: []) => void;
}

const getReservationListDoc = async (callback: Params): void => {
  const ReservationListDoc = await firestore()
    .collection('user-reservation')
    .doc('IBrKfuVZdkesTwqcZHna')
    .get()
    .then((item) => item.data())
    .catch(console.error);

  callback(ReservationListDoc['reservation-list']);
};

const setReservationListDoc = (updateData: Array<Record<string, unknown>>): void => {
  firestore()
    .collection('user-reservation')
    .doc('IBrKfuVZdkesTwqcZHna')
    .update({ 'reservation-list': updateData })
    .catch(console.error);
};

export { getReservationListDoc, setReservationListDoc };
