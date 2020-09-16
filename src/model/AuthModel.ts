import auth from '@react-native-firebase/auth';
import { AuthModelTypes, UserTypes } from './@types/AuthModel';

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
    const user: UserTypes = auth().currentUser;
    if (user) {
      await user.delete();
      console.log(`${user.email} deleted`);
    } else {
      console.warn('No user is signed in.');
    }
  },

  async updateEmail(email) {
    return auth().currentUser.updateEmail(email);
  },

  async updatePassword(password) {
    return auth().currentUser.updatePassword(password);
  },

  async updateUserProfile(displayName) {
    // profile: { displayName }
    return auth().currentUser.updateProfile({ displayName });
  },

  checkUserAuthentication() {
    return new Promise((resolve) => {
      auth().onAuthStateChanged((user: UserTypes) => {
        console.log('AuthModel: ', user);
        resolve(user);
      });
    });
  },

  getCurrentUser() {
    return auth().currentUser;
  },
};

export default AuthModel;
