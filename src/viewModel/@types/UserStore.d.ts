export interface UserStoreStates {
  email: string,
  username: string,
  password: string,
  passwordCheck: string,

  previousEmail: string,
  previousUsername: string,
  previousPassword: string,

  isLogin: boolean,

  user: UserTypes,

  checkSignIn(callback?: (isSignIn: boolean) => void): void,
  setPreviousInfo(info: Record<string, string>): void,
  clearPreviousInfo(): void,
  in(callback?: () => void): void,
  out(): void,
  up(callback?: () => void): void,
  delete(callback?: () => void): void,
  updateUsername(displayName: string): Promise<void>,
  updateEmail(email: string): Promise<void>,
  updatePassword(password: string): Promise<void>,
  compareUsername(): boolean,
  sendLink(callback?: () => void): void,
  checkVerification(): void,
  isVerified(isTouched: boolean): boolean,
  isEmptyPassword(): boolean,
  checkPassword(): boolean,
  checkIfAllValuesFilled(): boolean,
  resetInputValue(): void,
}

export interface UserCredentialTypes {
  user: {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    sendEmailVerification: () => void,
  }
}

export interface UserTypes {
  uid: string,
  displayName: string,
  email: string,
  emailVerified: boolean,
  sendEmailVerification: () => void,
  delete: () => void,
}
