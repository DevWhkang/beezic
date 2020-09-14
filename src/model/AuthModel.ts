import auth from '@react-native-firebase/auth';

export default {
  async signIn(email: string, password: string): Promise<unknown> {
    try {
      return auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  },

  async signUp(email: string, password: string): Promise<unknown> {
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

  async deleteCurrentUser(): Promise<unknown> {
    const user: Record<string, string> = auth().currentUser;
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

  async updateEmail(email: string): Promise<unknown> {
    // TODO
  },

  async updatePassword(password: string): Promise<unknown> {
    // TODO
  },

  async updateUserProfile(profile: Record<string, string>): Promise<unknown> {
    // profile: { displayName }
    try {
      return await auth().currentUser.updateProfile(profile);
    } catch (error) {
      throw new Error(error);
    }
  },

  checkUserAuthentication(): Promise<unknown> {
    return new Promise((resolve) => {
      auth().onAuthStateChanged((user: Record<string, unknown>) => {
        console.log('AuthModel: ', user);
        resolve(user);
      });
    });
  },

  getCurrentUser(): Record<string, unknown> {
    return auth().currentUser;
  },
};
