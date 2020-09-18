import { observable } from 'mobx';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatbotModel from '../model/ChatbotModel';
import { ChatbotStoreStates } from './@types/ChatBotStore';

const ChatBotStore: ChatbotStoreStates = observable({
  // State
  // address state
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
  setModalVisible() {
    this.modalVisible = !this.modalVisible;
  },

  setInput() {
    this.input = !this.input;
  },

  setMessages(messages) {
    this.messages = GiftedChat.append(this.messages, messages);
  },

  setAddress(data) {
    const { jibunAddress, roadAddress } = data;
    this.jibunAddress = jibunAddress;
    this.roadAddress = roadAddress;
  },

  setDetailAddress(detailAddress) {
    this.detailAddress = detailAddress;
  },

  setTotalAddress(type) {
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

  setUserFinalData(finalData) {
    this.userFinalData = finalData;
  },

  addReservation(user: Record<string, unknown>) {
    // db에서 data를 get -> [{}, ...]
    ChatbotModel.getReservationListDoc((dataArray) => {
      // userFinalData 만들기
      if (dataArray.length !== 0) {
        console.log('현재 예약 리스트 가져오기 성공');
      }
      ChatBotStore.setUserFinalData({
        id: dataArray.length + 1,
        user,
        address: ChatBotStore.totalAddress,
        checklist: [],
        itemImages: ChatBotStore.itemImages,
        alias: ChatBotStore.confirmAlias,
        assignmentStaff: {},
      });
      // db에서 가져온 예약 db에 붙이기
      dataArray.push(ChatBotStore.userFinalData);
      // 새롭게 추가된 예약 data 배열(list)를 db로 전송
      ChatbotModel.setReservationListDoc(dataArray);
    });
  },

  toogleisSetReservation() {
    this.isSetReservation = true;
  },

  falseIsReservation() {
    this.isSetReservation = false;
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

  initChatbotState() {
    this.input = '';
    this.messages = [];
    this.modalVisible = false;
    this.jibunAddress = '';
    this.roadAddress = '';
    this.detailAddress = '';
    this.totalAddress = {
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
    this.cameraModalVisible = false;
    this.isCurrentImage = false;
    this.currentImage = {
      key: '0',
      filePath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
    this.itemImages = [];
    this.userFinalData = {};
    this.isSetReservation = false;
    this.confirmAlias = '';
    this.alias = '';
  },

});

export default ChatBotStore;
