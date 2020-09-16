/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { CheckListModelTypes, ReservationListDocTypes } from './@types/CheckListModel';

const CheckListModel: CheckListModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getCheckListDoc(callback) {
    const ReservationListDoc: ReservationListDocTypes = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .catch(console.error);

    callback(ReservationListDoc['reservation-list']);
  },
  setCheckListDoc(updateData) {
    firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData })
      .catch(console.error);
  },
};

export default CheckListModel;
