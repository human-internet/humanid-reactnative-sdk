"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

var _themes = require("../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TermDescription() {
  const openWeb = () => {
    _reactNative.Linking.openURL('https://human-id.org/#how-we-protect');
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerTerms
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.images.iconInfo,
    style: _styles.default.iconInfo,
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerTermsText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.termsText,
    onPress: openWeb
  }, "Learn more about our"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.termsText,
    onPress: openWeb
  }, "mission to restore privacy")));
}

var _default = TermDescription;
exports.default = _default;
//# sourceMappingURL=TermsDescription.js.map