import ChatBotStore from '../../../viewModel/ChatBotStore';
import ChatImage from '../../../assets/Beezic_Logo_carrot.png';

interface IBotAdmin {
  _id: number;
  name: string;
  avatar: unknown;
}

const BOT_ADMIN : IBotAdmin = {
  _id: 3,
  name: 'Beezic Bot',
  avatar: ChatImage,
};

// Massagee
// 초기 세팅 Messages
const initMessages = [{
  _id: 3,
  text: 'ex) 판매자 or 구매자 라고 입력하세요.',
  createdAt: new Date(),
  user: BOT_ADMIN,
},
{
  _id: 2,
  text: '직거래 유형을 말해주세요.',
  createdAt: new Date(),
  user: BOT_ADMIN,
},
{
  _id: 1,
  text: '안녕하세요 Beezic Bot입니다!',
  createdAt: new Date(),
  user: BOT_ADMIN,
}];

// dialogflow에서 오는 Message
const dialogflowMessage = (text: string) => ({
  _id: ChatBotStore.messages.length + 1,
  text,
  createdAt: new Date(),
  user: BOT_ADMIN,
});

// 직거래 장소를 확인하는 Message
const ConfirmMessage = () => ({
  _id: ChatBotStore.messages.length + 1,
  text:
  `${ChatBotStore.totalAddress.roadAddress}\
  \n${ChatBotStore.totalAddress.detailAddress}\
  \n\n위 주소가 맞나요?`,
  createdAt: new Date(),
  user: BOT_ADMIN,
});

export {
  initMessages,
  ConfirmMessage,
  dialogflowMessage,
};
