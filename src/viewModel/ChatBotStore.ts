import { observable } from 'mobx';
import { GiftedChat } from 'react-native-gifted-chat';
import { setReservationListDoc, getReservationListDoc } from '../model/chatbotModel';

interface IUser {
  _id: number;
  name: string;
  avatar: string;
}

interface IMessage {
  _id: number;
  text: string;
  user: IUser<string, unknown>;
}

interface IMessages {
  messages: IMessage[];
  modalVisible: boolean;
  jibunAddress: string;
  roadAddress: string;
  detailAddress: string;
  totalAddress: Record<string, Record<string, string>>;
  userFinalData: Record<string, unknown>;
  isCurrentImage: boolean;
  currentImage: Record<string, unknown>;
  itemImages: [],
  cameraModalVisible: boolean;
  alias: string;
  confirmAlias: string;
  setMessages: (messages: Record<string, unknown>) => void;
  setAddress: (address: string) => void;
  setDetailAddress: (detailAddress: string) => void;
  setTotalAddress: () => void;
  setModalVisible: () => void;
  initAddress: () => void;
  setUserFinalData: (finalData: Record<string, unknown>) => void;
  addReservation: () => void;
  setCurrentImage: (image: Record<string, unknown>) => void;
  setItemImages: () => void;
  initCurrentImage: () => void;
  removeItemImage: (key: string) => void;
  setCameraModalVisible: () => void;
  setAlias: (alias: string) => void;
  setConfirmAlias: (confirmAlias: string) => void;
}

const ChatBotStore: IMessages = observable({
  // State
  // address state
  messages: [],
  modalVisible: false,
  jibunAddress: '',
  roadAddress: '',
  detailAddress: '',
  totalAddress: {
    location: {
      jibunAddress: '',
      roadAddress: '',
      detailAddress: '',
    },
    pickup: {
      jibunAddress: '',
      roadAddress: '',
      detailAddress: '',
    },
  },
  // camera state
  cameraModalVisible: false,
  isCurrentImage: false,
  currentImage: {
    key: '0',
    filePath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  },
  itemImages: [],
  userFinalData: {},
  confirmAlias: '',
  alias: '',

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

  setTotalAddress(type: string) {
    if (type === '직거래 장소' && type !== '픽업지') {
      this.totalAddress.location.roadAddress = this.roadAddress;
      this.totalAddress.location.jibunAddress = this.jibunAddress;
      this.totalAddress.location.detailAddress = this.detailAddress;
    }
    if (type !== '직거래 장소' && type === '픽업지') {
      this.totalAddress.pickup.roadAddress = this.roadAddress;
      this.totalAddress.pickup.jibunAddress = this.jibunAddress;
      this.totalAddress.pickup.detailAddress = this.detailAddress;
    }
  },

  setUserFinalData(finalData: Record<string, unknown>) {
    this.userFinalData = finalData;
  },

  addReservation() {
    // db에서 data를 get -> [{}, ...]
    getReservationListDoc((dataArray: []) => {
      // userFinalData 만들기
      ChatBotStore.setUserFinalData({
        id: dataArray.length + 1,
        user: {
          id: 1,
          username: 'kang',
          email: 'kwh@gmail.com',
        },
        address: ChatBotStore.totalAddress,
        checklist: [],
        itemImages: ChatBotStore.itemImages,
        alias: ChatBotStore.confirmAlias,
      });
      // db에서 가져온 예약 db에 붙이기
      dataArray.push(ChatBotStore.userFinalData);
      // 새롭게 추가된 예약 data 배열(list)를 db로 전송
      setReservationListDoc(dataArray);
    });
  },

  initAddress() {
    this.jibunAddress = '';
    this.roadAddress = '';
    this.detailAddress = '';
  },

  setCurrentImage(image: Record<string, unknown>) {
    this.currentImage = image;
    this.isCurrentImage = true;
  },

  initCurrentImage() {
    this.currentImage = {};
    this.isCurrentImage = false;
  },

  setItemImages() {
    this.itemImages.push(this.currentImage);
    this.initCurrentImage();
    console.log(this.itemImages);
  },

  removeItemImage(key: string) {
    this.itemImages = this.itemImages.filter((item) => item.key !== key);
  },

  setCameraModalVisible() {
    this.cameraModalVisible = !this.cameraModalVisible;
  },

  setAlias(alias: string) {
    this.alias = alias;
  },

  setConfirmAlias() {
    this.confirmAlias = this.alias;
  },

});

export default ChatBotStore;
