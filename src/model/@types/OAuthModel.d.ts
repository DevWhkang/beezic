import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface OAuthModelTypes {
  webClientId: string,
  initGoogleConfigure: () => void,
  onGoogleSignIn: () => Promise<FirebaseAuthTypes.UserCredential>,
  onFaceBookSignIn: () => Promise<FirebaseAuthTypes.UserCredential>,
}
