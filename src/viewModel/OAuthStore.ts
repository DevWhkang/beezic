import { observable } from 'mobx';
import { OAuthStoreStates, UserCredentialTypes } from './@types/OAuthStore';
import UserStore from './UserStore';
import ErrorStore from './ErrorStore';
import OAuthModel from '../model/OAuthModel';

const OAuthStore: OAuthStoreStates = observable({
  init() {
    try {
      OAuthModel.initGoogleConfigure();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async google() {
    try {
      const userCredential: UserCredentialTypes = await OAuthModel.onGoogleSignIn();
      const { user } = userCredential;
      UserStore.set(user);
      console.log('Google Sign In: ', user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async facebook() {
    try {
      const userCredential: UserCredentialTypes = await OAuthModel.onFaceBookSignIn();
      const { user } = userCredential;
      UserStore.set(user);
      console.log('Facebook Sign In: ', user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },
});

export default OAuthStore;
