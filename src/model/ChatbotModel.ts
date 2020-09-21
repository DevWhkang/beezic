/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import '@react-native-firebase/app';
import { ChatbotModelTypes } from './@types/ChatBotModel';
import { ReservationListDocTypes } from './@types/DataListModel';

const ChatbotModel: ChatbotModelTypes = {
  async getReservationListDoc() {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .then((data: ReservationListDocTypes) => data['reservation-list']);
  },

  async setReservationListDoc(updateData) {
    return firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData });
  },

};

export default ChatbotModel;
