/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { ChatbotModelTypes } from './@types/ChatBotModel';
import { ChatBotStore } from '../viewModel';

const ChatbotModel: ChatbotModelTypes = {
  async getReservationListDoc(callback) {
    const ReservationListDoc = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .get()
      .then((item) => item.data())
      .catch(console.error);
    callback(ReservationListDoc['reservation-list']);
  },
  async setReservationListDoc(updateData) {
    const result = await firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData })
      .then(() => true)
      .catch(console.error);
    console.log('1', true);
    if (result === true) {
      ChatBotStore.toogleisSetReservation();
    }
  },
};

export default ChatbotModel;
