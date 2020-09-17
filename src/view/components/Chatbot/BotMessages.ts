import ChatBotStore from '../../../viewModel/ChatBotStore';
import ChatImage from '../../../assets/Beezic_Logo_carrot.png';

interface IBotAdmin {
  _id: number;
  name: string;
  avatar: unknown;
}

const BOT_ADMIN: IBotAdmin = {
  _id: 1,
  name: 'Beezic Bot',
  avatar: ChatImage,
};

// Massagee
// 초기 세팅 Messages
const initMessages = (displayName: string) => [{
  _id: 3,
  text: 'ex) 판매자 or 구매자 라고 입력하세요.',
  // createdAt: new Date(),
  user: BOT_ADMIN,
},
{
  _id: 2,
  text: '직거래 유형을 말해주세요.',
  // createdAt: new Date(),
  user: BOT_ADMIN,
},
{
  _id: 1,
  text: `안녕하세요, ${displayName}님,\
  \nBeezic Bot입니다!`,
  // createdAt: new Date(),
  user: BOT_ADMIN,
}];

// dialogflow에서 오는 Message
const dialogflowMessage = (text: string) => ({
  _id: ChatBotStore.messages.length + 1,
  text,
  // createdAt: new Date(),
  user: BOT_ADMIN,
});

// 직거래 장소를 확인하는 Message
const ConfirmMessage = (currentType) => {
  let confirmText;
  if (currentType === '다시') {
    confirmText = `${currentType} 선택한 주소가 맞나요?`;
  } else {
    confirmText = `${currentType}가 맞나요?`;
  }
  return ({
    _id: ChatBotStore.messages.length + 1,
    text:
      `${ChatBotStore.roadAddress}\
  \n${ChatBotStore.detailAddress}\
  \n\n${confirmText}`,
    // createdAt: new Date(),
    user: BOT_ADMIN,
  });
};

const ImageSuccessMessage = () => ({
  _id: ChatBotStore.messages.length + 1,
  text: 'Beezic Bot이\
  \n판매 할 물건의 사진을 정리했어요.',
  // createdAt: new Date(),
  user: BOT_ADMIN,
});

const transactionTitleMessage = () => ({
  _id: ChatBotStore.messages.length + 1,
  text: '해당 중고 직거래의 별명을 알려주세요.\
  \n\n담당 직원이 배정되고 체크리스트를\
  \n작성하면 해당 직거래는 별명과 함께\
  \n마이페이지에서 확인 할 수 있어요!',
  // createdAt: new Date(),
  user: BOT_ADMIN,
});

const ConfirmAliasMessage = () => ({
  _id: ChatBotStore.messages.length + 1,
  text: `해당 직거래의 별명을          \
  \n"${ChatBotStore.confirmAlias}"로\
  \n설정 했어요.\
  \n\nBeezic Bot이 직거래 정보를\
  \n입수 했어요. Finish 버튼을 누르면\
  \n담당 비직 직원이 배정됩니다.`,
  // createdAt: new Date(),
  user: BOT_ADMIN,
});

export {
  initMessages,
  ConfirmMessage,
  dialogflowMessage,
  ImageSuccessMessage,
  transactionTitleMessage,
  ConfirmAliasMessage,
};
