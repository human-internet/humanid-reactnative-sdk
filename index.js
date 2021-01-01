/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {configureHumanID} from '@bobbyecho/react-native-humanid';
import {name as appName} from './app.json';
import AppLogo from './AppLogo';

configureHumanID({
  appName: 'YOUR_APP_NAME',
  clientSecret: 'APP_SECRET',
  clientId: 'APP_ID',
  Icon: AppLogo,
});

AppRegistry.registerComponent(appName, () => App);
