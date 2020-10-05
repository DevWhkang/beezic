import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { CheckListTypes, StaffDocTypes } from './DataListModel';

export interface UserTypes {
  _id: number,
  name: string,
  avatar: string,
}

export interface MessageTypes {
  _id: number,
  text: string,
  user: IUser,
}

export interface TotalAddressTypes {
  location: AddressTypes,
  pickup: AddressTypes,
}

export interface AddressTypes {
  jibunAddress: string,
  roadAddress: string,
}

export interface ImageTypes {
  key: string,
  fileUri: string,
  fileData: string,
  firePath: {
    data: string,
    uri: string,
  }
}

export interface UserFinalDataTypes {
  id: number;
  user: FirebaseAuthTypes.User,
  address: ChatBotStore.totalAddress,
  checklist: Array<CheckListTypes>,
  itemImages: Array<ImageTypes>,
  alias: string,
  assignmentStaff: StaffDocTypes,
}

export interface TransactionTypes {
  address: TotalAddressTypes,
}
