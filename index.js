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
  clientSecret:
    '12FZ3llRg5KFDuJFLftOxlQof1DKBtgL7mZrY4AE1zaM78o1Fvza2IZdKjdxT45Q',
  clientId: 'MOBILE_m65nshUmT9BDchwFEKdz',
  Icon: AppLogo,
});

AppRegistry.registerComponent(appName, () => App);
