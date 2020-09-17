import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { OAuthModelTypes } from './@types/OAuthModel';

const OAuthModel: OAuthModelTypes = {
  // webClientId:
  // 'client/oauth_client/client_id' in 'android/app/google-services.json'
  webClientId: '400584270881-rnuvks426b8gpfmqqlebmb7soig3f3dr.apps.googleusercontent.com',

  initGoogleConfigure() {
    console.log('Initalizing Google Sign In');
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
      webClientId: OAuthModel.webClientId,
    });
  },

  async onGoogleSignIn() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  },

  async onFaceBookSignIn() {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) throw Error('User cancelled the login process');
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) throw Error('Something went wrong obtaining access token');
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    return auth().signInWithCredential(facebookCredential);
  },
};

export default OAuthModel;
