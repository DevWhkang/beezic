export interface OAuthStoreStates {
  init: () => void,
  google: () => Promise<unknown>,
}

export interface UserCredentialTypes {
  user: UserTypes,
}

export interface UserTypes {
  uid: string,
  displayName: string,
  email: string,
  emailVerified: boolean,
  sendEmailVerification: () => void,
  delete: () => void,
}
