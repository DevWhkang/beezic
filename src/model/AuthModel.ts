import auth from '@react-native-firebase/auth';
import { AuthModelTypes, UserTypes } from './@types/AuthModel';

const AuthModel: AuthModelTypes = {
  async signIn(email, password) {
    try {
      return auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  },

  async signUp(email, password) {
    try {
      return auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  },

  async signOut(): Promise<unknown> {
    try {
      return await auth().signOut();
    } catch (error) {
      throw new Error(error);
    }
  },

  async deleteCurrentUser() {
    const user: UserTypes = auth().currentUser;
    try {
      if (user) {
        await user.delete();
        console.log(`${user.email} deleted`);
      } else {
        console.warn('No user is signed in.');
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  async updateEmail(email) {
    // TODO
  },

  async updatePassword(password) {
    // TODO
  },

  async updateUserProfile(profile) {
    // profile: { displayName }
    try {
      return await auth().currentUser.updateProfile(profile);
    } catch (error) {
      throw new Error(error);
    }
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
