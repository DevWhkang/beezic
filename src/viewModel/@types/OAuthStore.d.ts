export interface OAuthStoreTypes {
  init: () => void,
  google: () => Promise<void>,
  facebook: () => Promise<void>,
}
