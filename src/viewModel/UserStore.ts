import { observable } from 'mobx';
import { signIn } from '../model/userModel';

interface UserStore {
  isLogin: boolean,
  userInfo: {
    uid: string,
    email: string,
    displayName: string,
    password: string,
  },
  user: Record<string, unknown>,
  error: {
    '[auth/wrong-password]': boolean,
    '[auth/user-not-found]': boolean,
    '[auth/email-already-in-use]': boolean,
    '[auth/invalid-email]': boolean,
    'unexpected-error-occurred': boolean,
  }
  setUserInfo: (info: UserStore) => void,
  validateUser: () => void,
}

type InputValue = {
  email: string,
  password: string,
};

const userStore: UserStore = observable({
  isLogin: false,
  userInfo: {
    uid: '',
    email: '',
    displayName: '',
    password: '',
  },
  error: {
    '[auth/wrong-password]': false,
    '[auth/user-not-found]': false,
    '[auth/email-already-in-use]': false,
    '[auth/invalid-email]': false,
    'unexpected-error-occurred': false,
  },
  user: null,

  // async createAccount() {
  //   try {
  //     const uid = await signUp(this.userInfo);
  //     this.setUserInfo({ uid });
  //   } catch (error) {
  //     console.log('Sign Up Failed!');
  //     // TODO Error Handling
  //   }
  // },

  async validateUser() {
    try {
      const { email, password }: InputValue = this;
      const userCredential = await signIn(email, password);
      console.log('Sign In 성공', userCredential);
      const { user }: {
        user: Record<string, unknown>;
      } = userCredential;
      // TODO user.emailVerified가 true일 경우만 허용하도록 변경
      userStore.user = user;
      userStore.uid = user.uid;
      userStore.isLogin = true;
      userStore.error['[auth/email-already-in-use]'] = false;
      userStore.error['[auth/invalid-email]'] = false;
      userStore.error['[auth/user-not-found]'] = false;
      userStore.error['[auth/wrong-password]'] = false;
    } catch (error) {
      const { message }: { message: string; } = error as unknown;
      if (message.includes('auth')) {
        console.error(`Sign Error: ${message}`);
        const shortMessage = message.match(/\[.*\]/g)[0];
        userStore.error[shortMessage] = true;
        userStore.isLogin = false;
      }
    }
  },
});

export default userStore;
