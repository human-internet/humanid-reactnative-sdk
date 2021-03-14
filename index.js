/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {configureHumanID} from '@human-id/react-native-humanid';
import {name as appName} from './app.json';
import AppLogo from './AppLogo';

configureHumanID({
  appName: 'Test App',
  clientSecret: 'CLIENT_SECRET',
  clientId: 'CLIENT_ID',
  Icon: AppLogo,
});

AppRegistry.registerComponent(appName, () => App);
