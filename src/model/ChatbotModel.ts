/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';
import { ChatbotModelTypes } from './@types/ChatBotModel';

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
  setReservationListDoc(updateData: Array<Record<string, unknown>>) {
    firestore()
      .collection('user-reservation')
      .doc('IBrKfuVZdkesTwqcZHna')
      .update({ 'reservation-list': updateData })
      .catch(console.error);
  },
};

export default ChatbotModel;
