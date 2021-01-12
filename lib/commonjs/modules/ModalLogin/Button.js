"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _themes = require("../../themes");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  const {
    onPress
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerButton
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _styles.default.imgButton,
    source: _themes.images.logoIcon
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerLogoText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.subContainerLogoText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.sectionLogoText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.continueWithText
  }, "Continue with"), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _styles.default.imgText,
    source: _themes.images.logoText
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.privacyText
  }, "(recommended for full privacy)")))));
}

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map