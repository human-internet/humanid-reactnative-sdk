"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _themes = require("../../themes");

var _helpers = require("../../helpers");

const styles = _reactNative.StyleSheet.create({
  modal: {
    margin: 0,
    width: _themes.metrics.screenWidth
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: (0, _helpers.RFValue)(40),
    alignSelf: 'center',
    marginBottom: 25
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: _themes.colors.white,
    height: _themes.metrics.screenHeight * 0.65,
    ..._themes.globalStyles.containerModal
  },
  containerDescForm: {
    flex: 1
  },
  title: { ..._themes.globalStyles.title,
    textAlign: 'center'
  },
  description: { ..._themes.globalStyles.normal,
    textAlign: 'center'
  },
  phoneNumber: { ..._themes.globalStyles.normalBold,
    color: _themes.colors.primary,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 10
  },
  resendCode: { ..._themes.globalStyles.descriptionBold,
    color: _themes.colors.gray
  },
  containerDescription: {
    flex: 1,
    justifyContent: 'space-around'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  otpView: {
    width: (0, _helpers.RFPercentage)(50),
    height: 50,
    paddingHorizontal: (0, _helpers.RFValue)(20)
  },
  otpFieldStyle: {
    width: 65,
    height: 50,
    ..._themes.globalStyles.otpText,
    color: _themes.colors.black,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: _themes.colors.gray
  },
  otpHighlightStyle: {
    borderBottomColor: _themes.colors.primary
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map