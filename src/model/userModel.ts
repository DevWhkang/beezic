import auth from '@react-native-firebase/auth';

const signIn = async (email: string, password: string): Promise<unknown> => {
  try {
    return auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    const { code }: { code: string; } = error as unknown;
    console.log(code);
    if (code) throw new Error(code);
    throw new Error(error);
  }
};

// const signUp = async (email: string, password: string): void => {
//   try {
//     const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//     console.log(userCredential);
//   } catch (error) {
//     if (error.code.includes('email-already-in-use')) {
//       console.error(error);
//     } else if (error.code.includes('invalid-email')) {
//       console.error(error);
//     } else {
//       console.error(error);
//     }
//   }
// };

export { signIn };
