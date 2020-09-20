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

  set(user) {
    UserStore.user = user;
    UserStore.isLogin = true;
    ErrorStore.reset();
  },

  unset() {
    UserStore.isLogin = false;
    UserStore.user = null;
    ErrorStore.reset();
  },

  async in(callback) {
    try {
      const { email, password } = UserStore;
      const { user }: UserCredentialTypes = await AuthModel.signIn(email, password);
      const { emailVerified } = user;
      // TODO 이메일 인증 기능 추가
      // if (emailVerified) {
      if (!emailVerified) {
        UserStore.set(user);
        const { displayName } = user;
        UserStore.setPreviousInfo({ email, password, username: displayName });
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
      UserStore.unset();
      UserStore.clearPreviousInfo();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async up(callback) {
    try {
      const { email, password, username: displayName } = UserStore;
      await AuthModel.signUp(email, password);
      await AuthModel.updateUserProfile(displayName);
      const user = AuthModel.getCurrentUser();
      UserStore.set(user);
      UserStore.setPreviousInfo({ email, password, username: displayName });
      console.log('Sign Up: ', UserStore.user);
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async delete(callback) {
    try {
      await AuthModel.deleteCurrentUser();
      UserStore.unset();
      UserStore.clearPreviousInfo();
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async updateUsername(displayName) {
    try {
      const beforeUser: UserTypes = AuthModel.getCurrentUser();
      await AuthModel.updateUserProfile(displayName);
      UserStore.setPreviousInfo({ username: displayName });
      const user: UserTypes = AuthModel.getCurrentUser();
      UserStore.set(user);
      console.log(
        (`Updating Username
        Before: ${beforeUser.displayName}
        After: ${user.displayName}
        `).replace(/  +/g, ''),
      );
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async updateEmail(email) {
    try {
      const beforeUser: UserTypes = AuthModel.getCurrentUser();
      await AuthModel.updateEmail(email);
      UserStore.setPreviousInfo({ email });
      const user: UserTypes = AuthModel.getCurrentUser();
      UserStore.set(user);
      console.log(
        (`Updating Email
        Before: ${beforeUser.email}
        After: ${user.email}
        `).replace(/ +/g, ''),
      );
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async updatePassword(password) {
    try {
      await AuthModel.updatePassword(password);
      const user: UserTypes = AuthModel.getCurrentUser();
      UserStore.set(user);
      console.log('Updating Password');
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  compareUsername() {
    return UserStore.previousUsername === UserStore.username;
  },

  compareEmail() {
    return UserStore.previousEmail === UserStore.email;
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

  isEmptyPassword() {
    return (!UserStore.password || !UserStore.passwordCheck);
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
