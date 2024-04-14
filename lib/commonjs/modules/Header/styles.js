"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _themes = require("../../themes");

var _helpers = require("../../helpers");

const styles = _reactNative.StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: (0, _helpers.RFValue)(10),
    paddingVertical: (0, _helpers.RFValue)(10),
    backgroundColor: _themes.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: (0, _helpers.RFValue)(29),
    height: (0, _helpers.RFValue)(32),
    marginHorizontal: (0, _helpers.RFValue)(10)
  },
  logoText: {
    width: (0, _helpers.RFValue)(80),
    height: (0, _helpers.RFValue)(28),
    marginHorizontal: (0, _helpers.RFValue)(7.5),
    marginTop: (0, _helpers.RFValue)(-1)
  },
  text: { ..._themes.globalStyles.headerTitle,
    color: _themes.colors.white
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map