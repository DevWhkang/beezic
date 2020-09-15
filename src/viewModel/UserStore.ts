import { observable } from 'mobx';
import AuthModel from '../model/AuthModel';
import ErrorStore from './ErrorStore';
import { UserStoreStates, UserCredentialTypes, UserTypes } from './@types/UserStore';

const UserStore: UserStoreStates = observable({

  /* States */

  // Input Values
  email: '',
  username: '',
  password: '',
  passwordCheck: '',

  previousEmail: '',
  previousUsername: '',
  previousPassword: '',

  // Login 여부
  isLogin: false,

  // 현재 사용자의 정보를 담은 객체
  user: null,

  /* Store Handler */

  async checkSignIn(callback) {
    try {
      const user = await AuthModel.checkUserAuthentication();
      console.log('Check User Sign In: ', user);
      UserStore.user = user || null;
      UserStore.isLogin = !!user;
      ErrorStore.reset();
      if (callback) callback(!!user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  setPreviousInfo(info) {
    const { email, username, password } = info;
    if (email) UserStore.previousEmail = email;
    if (username) UserStore.previousUsername = username;
    if (password) UserStore.previousPassword = password;
  },

  clearPreviousInfo() {
    UserStore.previousEmail = '';
    UserStore.previousUsername = '';
    UserStore.previousPassword = '';
  },

  async in(callback) {
    try {
      const { email, password } = UserStore;
      const { user }: UserCredentialTypes = await AuthModel.signIn(email, password);
      const { emailVerified } = user;
      // TODO 이메일 인증 기능 추가
      // if (emailVerified) {
      if (!emailVerified) {
        UserStore.user = user;
        UserStore.isLogin = true;
        const { displayName } = user;
        UserStore.setPreviousInfo({ email, password, username: displayName });
        ErrorStore.reset();
        if (callback) callback();
      }
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async out(): void {
    try {
      const user = await AuthModel.signOut();
      console.log('Sign Out: ', user);
      UserStore.user = null;
      UserStore.isLogin = false;
      UserStore.clearPreviousInfo();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async up(callback) {
    try {
      const { email, password, username: displayName } = UserStore;
      const userCredential: UserCredentialTypes = await AuthModel.signUp(email, password);
      await AuthModel.updateUserProfile({ displayName });
      const { user } = userCredential;
      UserStore.user = user;
      UserStore.isLogin = true;
      UserStore.setPreviousInfo({ email, password, username: displayName });
      console.log('Sign Up: ', user);
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async delete(callback) {
    try {
      await AuthModel.deleteCurrentUser();
      UserStore.isLogin = false;
      UserStore.user = null;
      UserStore.clearPreviousInfo();
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async updateUsername(displayName) {
    try {
      const beforeUser: UserTypes = AuthModel.getCurrentUser();
      await AuthModel.updateUserProfile({ displayName });
      UserStore.setPreviousInfo({ username: displayName });
      const afterUser: UserTypes = AuthModel.getCurrentUser();
      console.log(
        (`Updating Username
        Before: ${beforeUser.displayName}
        After: ${afterUser.displayName}
        `).replace(/  +/g, ''),
      );
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  compareUsername() {
    return UserStore.previousUsername === UserStore.username;
  },

  async sendLink(callback) {
    try {
      const userCredential: UserCredentialTypes = await AuthModel.signUp(
        UserStore.email,
        'beezic-temporary-password',
      );
      const { user } = userCredential;
      user.sendEmailVerification();
      ErrorStore.reset();
      console.log(`Verification email is sent to ${UserStore.email}`);
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async checkVerification() {
    try {
      // 현재 sign in 상태인 유저의 verification 여부를 확인한다.
      UserStore.user = await AuthModel.checkUserAuthentication();
      console.log(UserStore.user);
    } catch {
      UserStore.user = null;
    }
  },

  isVerified(isTouched) {
    return isTouched
      && !!UserStore.user
      && UserStore.user.emailVerified;
  },

  checkPassword() {
    return (UserStore.password === UserStore.passwordCheck);
  },

  checkIfAllValuesFilled() {
    return !!(UserStore.email
      && UserStore.username
      && UserStore.password
      && UserStore.passwordCheck
    );
  },

  resetInputValue() {
    UserStore.email = '';
    UserStore.password = '';
    UserStore.displayName = '';
  },

});

export default UserStore;
