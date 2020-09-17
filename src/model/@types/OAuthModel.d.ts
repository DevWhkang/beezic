export interface OAuthModelTypes {
  initGoogleConfigure: () => void,
  onGoogleSignIn: () => Promise<UserCredentialTypes>,
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
  user: UserTypes
}
