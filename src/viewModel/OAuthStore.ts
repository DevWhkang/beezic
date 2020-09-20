import { observable } from 'mobx';
import { OAuthStoreTypes } from './@types/OAuthStore';
import UserStore from './UserStore';
import ErrorStore from './ErrorStore';
import OAuthModel from '../model/OAuthModel';

const OAuthStore: OAuthStoreTypes = observable({
  init() {
    try {
      OAuthModel.initGoogleConfigure();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async google() {
    try {
      const userCredential = await OAuthModel.onGoogleSignIn();
      const { user } = userCredential;
      UserStore.set(user);
      console.log('Google Sign In: ', user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async facebook() {
    try {
      const userCredential = await OAuthModel.onFaceBookSignIn();
      const { user } = userCredential;
      UserStore.set(user);
      console.log('Facebook Sign In: ', user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },
});

export default OAuthStore;
