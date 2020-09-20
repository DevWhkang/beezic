import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthModelTypes {
  signIn(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential>,
  signUp(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential>,
  signOut(): Promise<FirebaseAuthTypes.UserCredential>,
  deleteCurrentUser(): Promise<void>,
  updateEmail(email: string): Promise<void>,
  updatePassword(password: string): Promise<void>,
  updateUserProfile(profile: { displayName: string }): Promise<void>,
  checkUserAuthentication(): Promise<FirebaseAuthTypes.User>,
  getCurrentUser(): FirebaseAuthTypes.User | null,
}
