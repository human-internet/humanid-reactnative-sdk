import { Platform, StatusBar, Dimensions } from 'react-native';
import options from './core/options';
import { isIphoneX } from 'react-native-iphone-x-helper';

const countries = require('../assets/json/countries.json');

export function checkClient() {
  var _options$clientId, _options$clientSecret, _options$appName;

  if (options.clientId === null || !((_options$clientId = options.clientId) !== null && _options$clientId !== void 0 && _options$clientId.length) || options.clientSecret === null || !((_options$clientSecret = options.clientSecret) !== null && _options$clientSecret !== void 0 && _options$clientSecret.length)) {
    throw new Error('ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.');
  } else if (options.appName === null || !((_options$appName = options.appName) !== null && _options$appName !== void 0 && _options$appName.length)) {
    throw new Error('HumanID need your application name, please fill your application name');
  } else if (options.Icon === null) {
    throw new Error('HumanID need your application logo, please fill your application logo');
  }
}
export function getDialCode(countryCode) {
  var _countries$countryCod;

  return (_countries$countryCod = countries[countryCode]) === null || _countries$countryCod === void 0 ? void 0 : _countries$countryCod.dialCode;
}
export function getCountry(countryCode) {
  return countries[countryCode];
}
const {
  height,
  width
} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight = Platform.OS === 'android' || isIphoneX() ? standardLength - offset : standardLength;
export function RFPercentage(percent) {
  const heightPercent = percent * deviceHeight / 100;
  return Math.round(heightPercent);
} // guideline height for standard 5" device screen is 680

export function RFValue(fontSize, standardScreenHeight = 720) {
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Math.round(heightPercent);
}
//# sourceMappingURL=helpers.js.map