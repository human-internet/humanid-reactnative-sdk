"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

var _themes = require("../../themes");

var _helpers = require("../../helpers");

const styles = _reactNative.StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1
  },
  container: { ..._themes.globalStyles.container,
    flex: 1,
    height: _themes.metrics.screenHeight,
    alignItems: 'center',
    paddingHorizontal: 40
  },
  containerModal: {
    backgroundColor: _themes.colors.graySmooth,
    marginHorizontal: 15,
    height: _themes.metrics.screenHeight / 1.5,
    borderRadius: 6
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  illustration: {
    width: (0, _helpers.RFValue)(120),
    height: (0, _helpers.RFValue)(120),
    ...((0, _reactNativeIphoneXHelper.isIphoneX)() && {
      marginTop: 25
    })
  },
  desc: { ..._themes.globalStyles.normal,
    color: _themes.colors.white,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 10
  },
  termsText: { ..._themes.globalStyles.description,
    color: _themes.colors.white,
    textAlign: 'center'
  },
  learnMoreText: { ..._themes.globalStyles.descriptionBold,
    color: _themes.colors.white,
    textAlign: 'center',
    paddingVertical: 15,
    textDecorationLine: 'underline'
  },
  btnCancel: { ..._themes.globalStyles.title,
    color: _themes.colors.white
  },
  containerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: (0, _helpers.RFValue)(10),
    paddingHorizontal: 25
  },
  textInput: {
    width: '65%',
    height: '100%',
    marginHorizontal: 5,
    ...(_reactNative.Platform.OS === 'android' && {
      marginTop: -4.5
    }),
    borderBottomWidth: 1,
    borderBottomColor: _themes.colors.white,
    paddingHorizontal: 10,
    color: _themes.colors.white,
    ..._themes.globalStyles.title,
    textAlign: 'center'
  },
  btnContainer: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 5
  },
  btnEnter: {
    backgroundColor: _themes.colors.orange
  },
  btnEnterDisabled: {
    backgroundColor: _themes.colors.gray
  },
  btnEnterText: { ..._themes.globalStyles.title
  },
  centerContent: {
    justifyContent: 'center'
  },
  keyboardAvoid: {
    flex: 1
  },
  iconFlag: {
    width: 25,
    height: 25
  },
  countryText: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: '600'
  },
  countryCodeText: { ..._themes.globalStyles.normalBold,
    color: _themes.colors.gray
  },
  itemFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 15
  },
  separator: {
    height: 1,
    backgroundColor: _themes.colors.gray400
  },
  placeholderCountryCode: { ..._themes.globalStyles.title,
    color: _themes.colors.white,
    marginLeft: 5
  },
  containerInputCountryCode: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: _themes.colors.white,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    ...(_reactNative.Platform.OS === 'android' && {
      paddingBottom: 5
    })
  },
  btnCancelCountryPicker: {
    textAlign: 'center',
    backgroundColor: _themes.colors.graySmooth,
    borderRadius: 6,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 25,
    ..._themes.globalStyles.title
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 5
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map