"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkClient = checkClient;
exports.getDialCode = getDialCode;
exports.getCountry = getCountry;
exports.RFPercentage = RFPercentage;
exports.RFValue = RFValue;

var _reactNative = require("react-native");

var _options = _interopRequireDefault(require("./core/options"));

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const countries = require('../assets/json/countries.json');

function checkClient() {
  var _options$clientId, _options$clientSecret, _options$appName;

  if (_options.default.clientId === null || !((_options$clientId = _options.default.clientId) !== null && _options$clientId !== void 0 && _options$clientId.length) || _options.default.clientSecret === null || !((_options$clientSecret = _options.default.clientSecret) !== null && _options$clientSecret !== void 0 && _options$clientSecret.length)) {
    throw new Error('ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.');
  } else if (_options.default.appName === null || !((_options$appName = _options.default.appName) !== null && _options$appName !== void 0 && _options$appName.length)) {
    throw new Error('HumanID need your application name, please fill your application name');
  } else if (_options.default.Icon === null) {
    throw new Error('HumanID need your application logo, please fill your application logo');
  }
}

function getDialCode(countryCode) {
  var _countries$countryCod;

  return (_countries$countryCod = countries[countryCode]) === null || _countries$countryCod === void 0 ? void 0 : _countries$countryCod.dialCode;
}

function getCountry(countryCode) {
  return countries[countryCode];
}

const {
  height,
  width
} = _reactNative.Dimensions.get('window');

const standardLength = width > height ? width : height;
const offset = width > height ? 0 : _reactNative.Platform.OS === 'ios' ? 78 : _reactNative.StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight = _reactNative.Platform.OS === 'android' || (0, _reactNativeIphoneXHelper.isIphoneX)() ? standardLength - offset : standardLength;

function RFPercentage(percent) {
  const heightPercent = percent * deviceHeight / 100;
  return Math.round(heightPercent);
} // guideline height for standard 5" device screen is 680


function RFValue(fontSize, standardScreenHeight = 720) {
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Math.round(heightPercent);
}
//# sourceMappingURL=helpers.js.map