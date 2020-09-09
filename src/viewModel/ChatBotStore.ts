import { observable } from 'mobx';
import { GiftedChat } from 'react-native-gifted-chat';

interface IUser{
  _id: number;
  name: string;
  avatar: string;
}

interface IMessage{
  _id: number;
  text: string;
  user: IUser<string, unknown>;
}

interface IMessages{
  messages: IMessage[];
  modalVisible: boolean;
  jibunAddress: string;
  roadAddress: string;
  detailAddress: string;
  totalAddress: Record<string, unknown>;
  setMessages: (messages: Record<string, unknown>) => void;
  setAddress: (address: string) => void;
  setDetailAddress: (detailAddress: string) => void;
  setTotalAddress: () => void;
  setModalVisible: () => void;
  initAddress: () => void;
}

const ChatBotStore: IMessages = observable({
  // State
  messages: [],
  modalVisible: false,
  jibunAddress: '',
  roadAddress: '',
  detailAddress: '',
  totalAddress: {},

  // Action
  setModalVisible() {
    this.modalVisible = !this.modalVisible;
  },

  setMessages(messages: any) {
    this.messages = GiftedChat.append(this.messages, messages);
  },

  setAddress(data: Record<string, unknown>) {
    this.jibunAddress = data.jibunAddress;
    this.roadAddress = data.roadAddress;
  },

  setDetailAddress(detailAddress: string) {
    this.detailAddress = detailAddress;
  },

  setTotalAddress() {
    this.totalAddress.roadAddress = this.roadAddress;
    this.totalAddress.jibunAddress = this.jibunAddress;
    this.totalAddress.detailAddress = this.detailAddress;
  },

  initAddress() {
    this.jibunAddress = '';
    this.roadAddress = '';
    this.detailAddress = '';
    this.totalAddress = {};
  },

});

export default ChatBotStore;
