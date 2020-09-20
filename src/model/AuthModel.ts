import auth from '@react-native-firebase/auth';
import { AuthModelTypes } from './@types/AuthModel';

const AuthModel: AuthModelTypes = {
  async signIn(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
  },

  async signUp(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  },

  async signOut(): Promise<unknown> {
    return auth().signOut();
  },

  async deleteCurrentUser() {
    const user = AuthModel.getCurrentUser();
    return user.delete();
  },

  async updateEmail(email) {
    return auth().currentUser.updateEmail(email);
  },

  async updatePassword(password) {
    return auth().currentUser.updatePassword(password);
  },

  async updateUserProfile(displayName) {
    return auth().currentUser.updateProfile({ displayName });
  },

  checkUserAuthentication() {
    return new Promise((resolve, reject) => {
      try {
        auth().onAuthStateChanged(resolve);
      } catch (error) {
        reject(error);
      }
    });
  },

  getCurrentUser() {
    return auth().currentUser;
  },
};

export default AuthModel;
