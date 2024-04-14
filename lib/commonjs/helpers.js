"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkClient = checkClient;
exports.getDialCode = getDialCode;
exports.getCountry = getCountry;
exports.formatPhoneInternational = formatPhoneInternational;
exports.RFPercentage = RFPercentage;
exports.RFValue = RFValue;
exports.otpTimerFormat = otpTimerFormat;

var _reactNative = require("react-native");

var _options = _interopRequireDefault(require("./core/options"));

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const countries = require('../assets/json/countries.json');

function checkClient() {
  var _options$clientId, _options$clientSecret;

  if (_options.default.clientId === null || !((_options$clientId = _options.default.clientId) !== null && _options$clientId !== void 0 && _options$clientId.length) || _options.default.clientSecret === null || !((_options$clientSecret = _options.default.clientSecret) !== null && _options$clientSecret !== void 0 && _options$clientSecret.length)) {
    throw new Error('ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.');
  }
}

function getDialCode(countryCode) {
  var _countries$countryCod;

  return (_countries$countryCod = countries[countryCode]) === null || _countries$countryCod === void 0 ? void 0 : _countries$countryCod.dialCode;
}

function getCountry(countryCode) {
  return countries[countryCode];
}

function formatPhoneInternational(numberProto) {
  if (!(numberProto !== null && numberProto !== void 0 && numberProto.country_code) || !(numberProto !== null && numberProto !== void 0 && numberProto.national_number)) return null;
  const {
    country_code,
    national_number
  } = numberProto;

  const PNF = require('google-libphonenumber').PhoneNumberFormat;

  const phoneNumberLib = require('google-libphonenumber');

  const phoneUtil = phoneNumberLib.PhoneNumberUtil.getInstance();
  const number = phoneUtil.parseAndKeepRawInput(national_number, country_code);
  /**
   * E164: 0,
   * INTERNATIONAL: 1,
   * NATIONAL: 2,
   * RFC3966: 3
   */

  return phoneUtil.format(number, PNF.INTERNATIONAL).replace(/-/g, ' ');
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


function RFValue(fontSize) {
  let standardScreenHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 720;
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Math.round(heightPercent);
}

function otpTimerFormat(duration) {
  // Hours, minutes and seconds
  let hrs = ~~(duration / 3600);
  let mins = ~~(duration % 3600 / 60);
  let secs = ~~duration % 60; // Output like "1:01" or "4:03:59" or "123:03:59"

  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
//# sourceMappingURL=helpers.js.map