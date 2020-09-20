/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { CheckListModelTypes } from './@types/CheckListModel';
import { ReservationListDocTypes } from './@types/DataListModel';

const CheckListModel: CheckListModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getCheckListDoc() {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .then((data: ReservationListDocTypes) => data['reservation-list']);
  },
  async setCheckListDoc(updateData) {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData });
  },
};

export default CheckListModel;
