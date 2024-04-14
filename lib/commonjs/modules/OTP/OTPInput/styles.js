"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _themes = require("../../../themes");

const styles = _reactNative.StyleSheet.create({
  defaultTextFieldStyle: {
    width: 45,
    height: 45,
    borderColor: 'rgba(226, 226, 226, 1)',
    borderWidth: 0.5,
    borderRadius: 2,
    textAlign: 'center',
    color: _themes.colors.borderLine
  },
  containerTextField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  touchable: {
    width: '100%',
    height: '100%'
  }
});

var _default = styles;
exports.default = _default;
//# sourceMappingURL=styles.js.map