export interface AuthModelTypes {
  signIn(email: string, password: string): Promise<UserCredentialTypes>,
  signUp(email: string, password: string): Promise<UserCredentialTypes>,
  signOut(): Promise<UserCredentialTypes>,
  deleteCurrentUser(): Promise<unknown>,
  updateEmail(email: string): Promise<void>,
  updatePassword(password: string): Promise<void>,
  updateUserProfile(profile: Record<string, string>): Promise<void>,
  checkUserAuthentication(): Promise<UserTypes>,
  getCurrentUser(): UserTypes,
}

export interface UserTypes {
  uid: string,
  displayName: string,
  email: string,
  emailVerified: boolean,
  sendEmailVerification: () => void,
  delete: () => Promise<unknown>,
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
