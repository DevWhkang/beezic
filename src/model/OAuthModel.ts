import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { OAuthModelTypes } from './@types/OAuthModel';

const OAuthModel: OAuthModelTypes = {
  // webClientId:
  // 'client/oauth_client/client_id' in 'android/app/google-services.json'
  initGoogleConfigure() {
    console.log('Initalizing Google Sign In');
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
      webClientId: '400584270881-rnuvks426b8gpfmqqlebmb7soig3f3dr.apps.googleusercontent.com',
    });
  },

  async onGoogleSignIn() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  },
};

export default OAuthModel;
