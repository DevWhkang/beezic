import { observable } from 'mobx';
import AuthModel from '../model/AuthModel';
import ErrorStore from './ErrorStore';

const UserStore = observable({

  /* States */

  email: '',
  username: '',
  password: '',
  passwordCheck: '',

  isLogin: false,
  user: null,

  /* Store Handler */

  async checkSignIn(callback?: (isSignIn: boolean) => void): void {
    try {
      const user = await AuthModel.checkUserAuthentication();
      if (user) {
        UserStore.user = user;
        UserStore.isLogin = true;
      }
      if (callback) callback(!!user);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async in(callback?: () => void): void {
    try {
      const { email, password } = UserStore as Record<string, string>;
      const { user }: unknown = await AuthModel.signIn(email, password);
      const { emailVerified }: Record<string, boolean> = user as unknown;
      // TODO 이메일 인증 기능 추가
      // if (emailVerified) {
      if (!emailVerified) {
        UserStore.user = user as Record<string, unknown>;
        UserStore.isLogin = true;
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
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async up(callback?: () => void): void {
    try {
      const { email, password, username } = UserStore;
      const userCredential = await AuthModel.signUp(email, password);
      await AuthModel.updateUserProfile({ displayName: username });
      const { user } = userCredential;
      console.log('Sign Up: ', user);
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async delete(callback?: () => void): void {
    try {
      await AuthModel.deleteCurrentUser();
      if (callback) callback();
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async sendLink(callback?: () => void): void {
    try {
      const userCredential = await AuthModel.signUp(
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

  async checkVerification(): void {
    try {
      // 현재 sign in 상태인 유저의 verification 여부를 확인한다.
      UserStore.user = await AuthModel.checkUserAuthentication();
      console.log(UserStore.user);
    } catch {
      UserStore.user = null;
    }
  },

  isVerified(isTouched: boolean): boolean {
    return isTouched
      && !!UserStore.user
      && UserStore.user.emailVerified;
  },

  checkPassword(): boolean {
    return (UserStore.password === UserStore.passwordCheck);
  },

  checkIfAllValuesFilled(): boolean {
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

  // // Sign Up
  // async register(callback) {
  //   try {
  //     const { inputValue: { email } } = UserStore;
  //     const userCredential: unknown = await signUp(email, 'beezic-temporary-password');
  //     const { user }: Record<string, unknown> = userCredential;
  //     console.log('Sign Up: ', user);
  //     UserStore.user = user;
  //     UserStore.isLogin = true;
  //     ErrorStore.reset();
  //     UserStore.verify();
  //     callback();
  //   } catch (error) {
  //     ErrorStore.handle(error);
  //   }
  // },

});

export default UserStore;
