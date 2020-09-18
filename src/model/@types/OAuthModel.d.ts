export interface OAuthModelTypes {
  webClientId: string,
  initGoogleConfigure: () => void,
  onGoogleSignIn: () => Promise<UserCredentialTypes>,
  onFaceBookSignIn: () => Promise<UserCredentialTypes>,
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
