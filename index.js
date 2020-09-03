/* global __DEV__ */

import { AppRegistry } from 'react-native';
import App from './App.tsx';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
