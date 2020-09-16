export interface AuthModelTypes {
  signIn(email: string, password: string): Promise<UserCredentialTypes>,
  signUp(email: string, password: string): Promise<UserCredentialTypes>,
  signOut(): Promise<UserCredentialTypes>,
  deleteCurrentUser(): Promise<unknown>,
  updateEmail(email: string): Promise<UserCredentialTypes>,
  updatePassword(password: string): Promise<UserCredentialTypes>,
  updateUserProfile(profile: Record<string, string>): Promise<UserCredentialTypes>,
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
