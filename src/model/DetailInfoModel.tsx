/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

const DetailInfoModel: CheckListModelTypes = {

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
