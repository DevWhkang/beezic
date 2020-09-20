export interface IUser {
  _id: number;
  name: string;
  avatar: string;
}

export interface IMessage {
  _id: number;
  text: string;
  user: IUser<string, unknown>;
}

export interface Address {
  jibunAddress: string,
  roadAddress: string,
}

export interface ChatbotStoreStates {
  isModalShown: boolean,
  input: boolean;
  messages: IMessage[];
  modalVisible: boolean;
  jibunAddress: string;
  roadAddress: string;
  detailAddress: string;
  totalAddress: Record<string, Record<string, string>>;
  cameraModalVisible: boolean;
  isCurrentImage: boolean;
  currentImage: Record<string, unknown>;
  itemImages: [],
  userFinalData: Record<string, unknown>;
  isSetReservation: boolean;
  confirmAlias: string;
  alias: string;
  toggleModal : () => void;
  setModalVisible: () => void;
  setInput: () => void;
  setMessages: (messages: Record<string, unknown>) => void;
  setAddress: (data: Address) => void;
  setDetailAddress: (detailAddress: string) => void;
  setTotalAddress: (type: string) => void;
  setUserFinalData: (finalData: Record<string, unknown>) => void;
  addReservation: () => void;
  toggleIsSetReservation: () => void;
  falseIsReservation: () => void;
  initAddress: () => void;
  setCurrentImage: (image: Record<string, unknown>) => void;
  initCurrentImage: () => void;
  setItemImages: () => void;
  removeItemImage: (key: string) => void;
  setCameraModalVisible: () => void;
  setAlias: (alias: string) => void;
  setConfirmAlias: (confirmAlias: string) => void;
  initChatbotState: () => void;
}
