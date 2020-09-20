import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface StaffDocTypes {
  user: FirebaseAuthTypes.User,
  staffProfile: StaffProfileTypes,
  assignmentStaff: { id: number },
  assignmentTransaction: Array<ReservationDocTypes>,
}

export interface StaffProfileTypes {
  id: number,
  name: string,
  email: string,
  image: string,
  phone: string,
  introduce: string,
}

export interface StaffListDocTypes {
  [key: string]: Array<StaffDocTypes>,
}

export interface ReservationDocTypes {
  id: number,
  checklist: Array<CheckListTypes>
  assignmentStaffProfile: StaffProfileTypes,
  user: FirebaseAuthTypes.User;
}

export interface ReservationListDocTypes {
  [key: string]: Array<ReservationDocTypes>
}

export interface CheckListTypes {
  id: number,
  description: string,
}
