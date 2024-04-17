"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _themes = require("../../themes");

var _helpers = require("../../helpers");

var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let hasNotch = _reactNativeDeviceInfo.default.hasNotch();

const styles = _reactNative.StyleSheet.create({
  modal: {
    margin: 0,
    ...(_reactNative.Platform.OS === 'ios' && {
      marginTop: 20
    })
  },
  container: {
    width: _themes.metrics.screenWidth,
    backgroundColor: _themes.colors.white,
    height: _themes.metrics.screenHeight
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: _themes.colors.gray
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: _themes.colors.gray,
    paddingHorizontal: 25
  },
  descriptionBottom: {
    fontSize: 14,
    textAlign: 'center',
    color: _themes.colors.gray
  },
  phoneNumber: {
    color: _themes.colors.primary,
    textAlign: 'center',
    marginTop: 1.5
  },
  textSpace28: {
    marginBottom: 28
  },
  textSpace21: {
    marginBottom: 21
  },
  resendCode: {
    fontSize: 14,
    marginTop: (0, _helpers.RFValue)(27.5),
    color: _themes.colors.primary,
    alignSelf: 'flex-start',
    paddingLeft: (0, _helpers.RFValue)(25)
  },
  resendActivity: {
    marginTop: (0, _helpers.RFValue)(27.5),
    alignSelf: 'center'
  },
  containerDescription: {
    marginTop: (0, _helpers.RFValue)(85)
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 44,
    marginBottom: 25
  },
  otpView: {
    width: (0, _helpers.RFPercentage)(45),
    height: 50,
    paddingHorizontal: (0, _helpers.RFValue)(15)
  },
  otpFieldStyle: {
    width: (0, _helpers.RFValue)(65),
    height: 50,
    ..._themes.globalStyles.otpText,
    color: _themes.colors.black,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: _themes.colors.borderLine,
    paddingBottom: -20
  },
  otpHighlightStyle: {
    width: (0, _helpers.RFValue)(65),
    height: 50,
    ..._themes.globalStyles.otpText,
    color: _themes.colors.black,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: _themes.colors.primary,
    paddingBottom: -20
  },
  containerModalLoading: {
    flexDirection: 'row',
    paddingVertical: 25,
    marginHorizontal: 40,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 12
  },
  textLoading: { ..._themes.globalStyles.normal,
    alignSelf: 'center',
    marginLeft: 10,
    color: _themes.colors.black
  },
  toolbar: { ...(_reactNative.Platform.OS === 'ios' && hasNotch ? {
      height: 54
    } : _reactNative.Platform.OS === 'ios' ? {
      height: 24
    } : {
      height: 0
    }),
    width: _themes.metrics.screenWidth,
    backgroundColor: '#023b60',
    alignItems: 'flex-start'
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map