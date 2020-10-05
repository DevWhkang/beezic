/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { DetailInfoModelTypes } from './@types/DetailInfoModel';
import { ReservationListDocTypes } from './@types/DataListModel';

const DetailInfoModel: DetailInfoModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getTransactionListDoc() {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .then((data: ReservationListDocTypes) => data['reservation-list']);
  },
};

export default DetailInfoModel;
