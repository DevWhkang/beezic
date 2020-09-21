import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserInfo {
  email: string,
  username: string,
  password: string,
}

export interface UserStoreTypes {
  email: string,
  username: string,
  password: string,
  passwordCheck: string,

  previousEmail: string,
  previousUsername: string,
  previousPassword: string,

  isLogin: boolean,

  user: FirebaseAuthTypes.User,

  checkSignIn(callback?: (isSignIn: boolean) => void): Promise<void>,
  setPreviousInfo(info: UserInfo): void,
  clearPreviousInfo(): void,
  set(user: FirebaseAuthTypes.User): void,
  unset(): void,
  in(callback?: () => void): Promise<void>,
  out(): Promise<void>,
  up(callback?: () => void): Promise<void>,
  delete(callback?: () => void): Promise<void>,
  updateUsername(displayName: string): Promise<void>,
  updateEmail(email: string): Promise<void>,
  updatePassword(password: string): Promise<void>,
  compareUsername(): boolean,
  sendLink(callback?: () => void): Promise<void>,
  checkVerification(): void,
  isVerified(isTouched: boolean): boolean,
  isEmptyPassword(): boolean,
  checkPassword(): boolean,
  checkIfAllValuesFilled(): boolean,
  resetInputValue(): void,
}
