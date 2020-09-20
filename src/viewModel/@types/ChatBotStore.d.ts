import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { CheckListTypes, StaffDocTypes } from './DataListModel';

interface UserTypes {
  _id: number,
  name: string,
  avatar: string,
}

interface MessageTypes {
  _id: number,
  text: string,
  user: IUser,
}

interface TotalAddressTypes {
  location: AddressTypes,
  pickup: AddressTypes,
}

interface AddressTypes {
  jibunAddress: string,
  roadAddress: string,
}

interface ImageTypes {
  key: string,
  fileUri: string,
  fileData: string,
  firePath: {
    data: string,
    uri: string,
  }
}

interface UserFinalDataTypes {
  id: number;
  user: FirebaseAuthTypes.User,
  address: ChatBotStore.totalAddress,
  checklist: Array<CheckListTypes>,
  itemImages: Array<ImageTypes>,
  alias: string,
  assignmentStaff: StaffDocTypes,
}

export interface ChatbotStoreTypes {
  isModalShown: boolean,
  input: boolean,
  messages: Array<IMessage>,
  modalVisible: boolean,
  jibunAddress: string,
  roadAddress: string,
  detailAddress: string,
  totalAddress: TotalAddressTypes,
  cameraModalVisible: boolean,
  isCurrentImage: boolean,
  currentImage: ImageTypes,
  itemImages: Array<ImageTypes>,
  userFinalData: UserFinalDataTypes,
  isSetReservation: boolean,
  confirmAlias: string,
  alias: string,

  setModalVisible(): void,
  setInput(): void,
  setMessages(messages: MessageTypes): void,
  setAddress(data: AddressTypes): void,
  setDetailAddress(detailAddress: string): void,
  setTotalAddress(type: string): void,
  setUserFinalData(finalData: UserFinalDataTypes): void,
  addReservation(): Promise<void>,
  toggleIsSetReservation(): void,
  falseIsReservation(): void,
  initAddress(): void,
  setCurrentImage(image: ImageTypes): void,
  initCurrentImage(): void,
  setItemImages(): void,
  removeItemImage(key: string): void,
  setCameraModalVisible(): void,
  setAlias(alias: string): void,
  setConfirmAlias(confirmAlias: string): void,
  initChatbotState(): void,
}
