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
  input: string;
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
  setAddress: (data: Address) => void;
  setDetailAddress: (detailAddress: string) => void;
  setTotalAddress: (type: string) => void;
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
  initChatbotState: () => void;
}
