import { observable } from 'mobx';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatbotModel from '../model/ChatbotModel';
import ErrorStore from './ErrorStore';
import { ChatbotStoreTypes } from './@types/ChatBotStore';

const ChatBotStore: ChatbotStoreTypes = observable({
  // State
  // address state
  isModalShown: false,

  input: false,
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
  isSetReservation: false,
  confirmAlias: '',
  alias: '',

  // Action
  toggleModal() {
    this.isModalShown = !this.isModalShown;
  },
  setModalVisible() {
    ChatBotStore.modalVisible = !ChatBotStore.modalVisible;
  },

  setInput() {
    ChatBotStore.input = !ChatBotStore.input;
  },

  setMessages(messages) {
    ChatBotStore.messages = GiftedChat.append(ChatBotStore.messages, messages);
  },

  setAddress(data) {
    const { jibunAddress, roadAddress } = data;
    ChatBotStore.jibunAddress = jibunAddress;
    ChatBotStore.roadAddress = roadAddress;
  },

  setDetailAddress(detailAddress) {
    ChatBotStore.detailAddress = detailAddress;
  },

  setTotalAddress(type) {
    if (type === '직거래 장소' && type !== '픽업지') {
      ChatBotStore.totalAddress.location.roadAddress = ChatBotStore.roadAddress;
      ChatBotStore.totalAddress.location.jibunAddress = ChatBotStore.jibunAddress;
      ChatBotStore.totalAddress.location.detailAddress = ChatBotStore.detailAddress;
    }
    if (type !== '직거래 장소' && type === '픽업지') {
      ChatBotStore.totalAddress.pickup.roadAddress = ChatBotStore.roadAddress;
      ChatBotStore.totalAddress.pickup.jibunAddress = ChatBotStore.jibunAddress;
      ChatBotStore.totalAddress.pickup.detailAddress = ChatBotStore.detailAddress;
    }
  },

  setUserFinalData(finalData) {
    ChatBotStore.userFinalData = finalData;
  },

  async addReservation(user: Record<string, unknown>) {
    // db에서 data를 get -> [{}, ...]
    try {
      const dataArray = await ChatbotModel.getReservationListDoc();
      // userFinalData 만들기
      ChatBotStore.setUserFinalData({
        id: dataArray.length + 1,
        user,
        address: ChatBotStore.totalAddress,
        checklist: [],
        itemImages: ChatBotStore.itemImages,
        alias: ChatBotStore.confirmAlias,
        assignmentStaffProfile: {},
      });
      // db에서 가져온 예약 db에 붙이기
      dataArray.push(ChatBotStore.userFinalData);
      // 새롭게 추가된 예약 data 배열(list)를 db로 전송
      await ChatbotModel.setReservationListDoc(dataArray);
      ChatBotStore.toggleIsSetReservation();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  toggleIsSetReservation() {
    ChatBotStore.isSetReservation = true;
  },

  falseIsReservation() {
    ChatBotStore.isSetReservation = false;
  },

  initAddress() {
    ChatBotStore.jibunAddress = '';
    ChatBotStore.roadAddress = '';
    ChatBotStore.detailAddress = '';
  },

  setCurrentImage(image: Record<string, unknown>) {
    ChatBotStore.currentImage = image;
    ChatBotStore.isCurrentImage = true;
  },

  initCurrentImage() {
    ChatBotStore.currentImage = {};
    ChatBotStore.isCurrentImage = false;
  },

  setItemImages() {
    ChatBotStore.itemImages.push(ChatBotStore.currentImage);
    ChatBotStore.initCurrentImage();
  },

  removeItemImage(key: string) {
    ChatBotStore.itemImages = ChatBotStore.itemImages.filter((item) => item.key !== key);
  },

  setCameraModalVisible() {
    ChatBotStore.cameraModalVisible = !ChatBotStore.cameraModalVisible;
  },

  setAlias(alias: string) {
    ChatBotStore.alias = alias;
  },

  setConfirmAlias() {
    ChatBotStore.confirmAlias = ChatBotStore.alias;
  },

  initChatbotState() {
    ChatBotStore.input = '';
    ChatBotStore.messages = [];
    ChatBotStore.modalVisible = false;
    ChatBotStore.jibunAddress = '';
    ChatBotStore.roadAddress = '';
    ChatBotStore.detailAddress = '';
    ChatBotStore.totalAddress = {
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
    };
    // camera state
    ChatBotStore.cameraModalVisible = false;
    ChatBotStore.isCurrentImage = false;
    ChatBotStore.currentImage = {
      key: '0',
      filePath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
    ChatBotStore.itemImages = [];
    ChatBotStore.userFinalData = {};
    ChatBotStore.isSetReservation = false;
    ChatBotStore.confirmAlias = '';
    ChatBotStore.alias = '';
  },

});

export default ChatBotStore;
