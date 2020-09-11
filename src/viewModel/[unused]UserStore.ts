import { observable } from 'mobx';
import AuthModel from '../model/AuthModel';

const UserStore = observable({

  /* States */

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

  async checkVerification(callback?): void {
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

  // // Update user's profile
  // async update(profile) {
  //   // TODO TEST userCredential이 반환되는지 확인하지 않음
  //   const userCredential: unknown = await updateUserProfile(profile);
  //   console.log(userCredential);
  // },

  // // Verify user's email
  // verify() {
  //   if (UserStore.user) {
  //     const { user }: Record<string, () => void> = UserStore;
  //     user.sendEmailVerification();
  //     const { email }: Record<string, string> = UserStore.user;
  //   } else {
  //     console.warn('No user is signed.');
  //   }
  // },

  // // Check user's email verification
  // async checkVerification() {
  //   try {
  //     // 현재 sign in 상태인 유저의 verification 여부를 확인한다.
  //     const user: unknown = await checkUserAuthentication();
  //     const { emailVerified }: Record<string, boolean> = user;
  //     UserStore.emailVerified = emailVerified;
  //   } catch {
  //     UserStore.emailVerified = false;
  //   }
  // },

  // Reset InputValue
  resetInputValue() {
    UserStore.email = '';
    UserStore.password = '';
    UserStore.displayName = '';
  },

});

export default UserStore;
