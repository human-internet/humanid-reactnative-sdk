"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _themes = require("../../themes");

var _helpers = require("../../helpers");

const {
  height
} = _reactNative.Dimensions.get('window');

const percentage = height <= 640 ? 0.6 : 0.5;

const styles = _reactNative.StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: _themes.metrics.screenWidth
  },
  container: {
    backgroundColor: _themes.colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: _themes.metrics.screenHeight * percentage,
    ..._themes.globalStyles.containerModal
  },
  containerIconAppName: {
    alignItems: 'center'
  },
  tosLabel: { ..._themes.globalStyles.description,
    color: _themes.colors.orange,
    marginVertical: 10,
    textAlign: 'center'
  },
  imgButton: {
    width: (0, _helpers.RFValue)(60),
    height: (0, _helpers.RFValue)(60),
    marginRight: 10
  },
  appName: { ..._themes.globalStyles.title,
    color: _themes.colors.white,
    fontWeight: 'bold',
    marginTop: 25
  },
  containerButton: {
    minHeight: 50,
    backgroundColor: _themes.colors.white,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  containerLogoText: {
    flexDirection: 'column',
    marginRight: 5
  },
  subContainerLogoText: {
    flex: 1,
    paddingVertical: 5
  },
  sectionLogoText: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  continueWithText: { ..._themes.globalStyles.normal,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  privacyText: { ..._themes.globalStyles.description,
    flex: 1,
    marginTop: -5,
    color: _themes.colors.gray,
    alignSelf: 'center'
  },
  imgText: {
    flex: 1,
    height: (0, _helpers.RFValue)(30),
    marginTop: (0, _helpers.RFValue)(-3),
    marginLeft: 2.5,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map