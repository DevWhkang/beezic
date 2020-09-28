/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import Geocoder from 'react-native-geocoding';
import { GEOCODING_API_KEY } from '@dotenv';

const DetailInfoModel: CheckListModelTypes = {
  // get 요청 이후 필요한 부분만 가져오는걸로 수정될 수 있음. (현재 chatbotModel에서의 get요청과 동일)
  async getTransactionListDoc() {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .then((data: ReservationListDocTypes) => data['reservation-list']);
  },

  async getGeocoding(address) {
    Geocoder.init(GEOCODING_API_KEY);

    return Geocoder
      .from(address)
      .then((json) => json.results[0].geometry.location);
  },

};

export default DetailInfoModel;
