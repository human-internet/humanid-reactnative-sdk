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
  appNameBold: {
    marginTop: (0, _helpers.RFValue)(22),
    marginBottom: (0, _helpers.RFValue)(2.5),
    fontSize: 18,
    color: _themes.colors.gray,
    textAlign: 'center'
  },
  appNameRegular: {
    fontSize: 18,
    color: _themes.colors.gray,
    textAlign: 'center'
  },
  modal: {
    margin: 0,
    zIndex: 1,
    ...(_reactNative.Platform.OS === 'ios' && {
      marginTop: 20
    })
  },
  container: { ..._themes.globalStyles.container,
    flex: 1,
    height: _themes.metrics.screenHeight - 78,
    paddingHorizontal: 30
  },
  containerModal: {
    backgroundColor: _themes.colors.graySmooth,
    marginHorizontal: 15,
    height: _themes.metrics.screenHeight / 1.5,
    borderRadius: 6
  },
  modalCountryPicker: {
    backgroundColor: _themes.colors.white,
    width: _themes.metrics.screenWidth,
    height: _themes.metrics.screenHeight,
    margin: 0,
    ...(_reactNative.Platform.OS === 'ios' && {
      paddingTop: 10
    }),
    justifyContent: 'flex-start'
  },
  content: {
    alignItems: 'center'
  },
  containerTerms: {
    marginLeft: -10,
    flexDirection: 'row'
  },
  illustration: {
    width: (0, _helpers.RFValue)(120),
    height: (0, _helpers.RFValue)(120),
    ...((0, _reactNativeIphoneXHelper.isIphoneX)() && {
      marginTop: 25
    })
  },
  desc: {
    fontSize: 13,
    color: _themes.colors.gray,
    alignSelf: 'center'
  },
  textSpace: {
    marginVertical: 10
  },
  termsText: {
    fontSize: 12,
    color: _themes.colors.primaryLight
  },
  learnMoreText: { ..._themes.globalStyles.descriptionBold,
    color: _themes.colors.gray,
    textAlign: 'center',
    paddingVertical: 15,
    textDecorationLine: 'underline'
  },
  btnCancel: { ..._themes.globalStyles.normal,
    color: _themes.colors.gray,
    marginTop: (0, _helpers.RFValue)(30)
  },
  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 25,
    marginBottom: 45
  },
  textInput: {
    width: '65%',
    height: '100%',
    marginHorizontal: 5,
    paddingBottom: 5,
    ...(_reactNative.Platform.OS === 'android' && {
      marginTop: -4.5
    }),
    borderBottomWidth: 0.5,
    borderBottomColor: _themes.colors.borderLine,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  phoneOnTyping: {
    fontSize: 14,
    color: _themes.colors.gray
  },
  placeholder: {
    color: _themes.colors.placeholder,
    fontSize: 14
  },
  btnContainer: {
    height: 35,
    width: 80,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  btnEnter: {
    backgroundColor: _themes.colors.primary,
    justifyContent: 'center'
  },
  btnEnterDisabled: {
    backgroundColor: _themes.colors.disabled,
    justifyContent: 'center'
  },
  btnEnterText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: _themes.colors.white
  },
  btnEnterTextDisabled: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: _themes.colors.borderLine
  },
  centerContent: {
    flexDirection: 'row',
    ...(_reactNative.Platform.OS === 'ios' && {
      width: _themes.metrics.screenWidth
    }),
    ...(_reactNative.Platform.OS === 'ios' && {
      paddingLeft: (0, _helpers.RFValue)(20)
    }),
    marginTop: (0, _helpers.RFValue)(50)
  },
  keyboardAvoid: {
    flex: 1
  },
  iconFlag: {
    resizeMode: 'cover',
    width: 20,
    height: 14
  },
  countryText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  countryCodeText: {
    fontSize: 14,
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
    backgroundColor: _themes.colors.graySmooth
  },
  placeholderCountryCode: {
    fontSize: 14,
    color: _themes.colors.gray,
    marginLeft: 5
  },
  containerInputCountryCode: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: _themes.colors.borderLine,
    borderBottomWidth: 0.5,
    paddingHorizontal: 5,
    bottom: 0.2
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
  txInputCountrySearch: {
    flex: 1,
    backgroundColor: _themes.colors.graySmooth,
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    ...(_reactNative.Platform.OS === 'ios' && {
      height: 35
    }),
    ..._themes.globalStyles.normal
  },
  arrowDown: {
    alignSelf: 'center',
    width: 15,
    height: 15,
    marginLeft: 10
  },
  containerIconAppName: {
    marginTop: (0, _helpers.RFValue)(37),
    alignItems: 'center'
  },
  iconLock: {
    width: (0, _helpers.RFValue)(20),
    height: (0, _helpers.RFValue)(20),
    marginRight: 5,
    alignSelf: 'center'
  },
  iconInfo: {
    marginRight: 7.5,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  containerTermsText: {
    flex: 1,
    alignSelf: 'flex-start'
  },
  textCountryNotFound: { ..._themes.globalStyles.description,
    marginTop: (0, _helpers.RFPercentage)(5),
    alignSelf: 'center'
  },
  containertxInputSearchCountry: {
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  iconClose: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginTop: 7.5
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map