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
  clientSecret: '12FZ3llRg5KFDuJFLftOxlQof1DKBtgL7mZrY4AE1zaM78o1Fvza2IZdKjdxT45Q',
  clientId: 'MOBILE_m65nshUmT9BDchwFEKdz',
  Icon: AppLogo,
});

AppRegistry.registerComponent(appName, () => App);
