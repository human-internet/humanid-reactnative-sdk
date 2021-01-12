"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TermDescription() {
  const openWeb = () => {
    _reactNative.Linking.openURL('https://human-id.org/#how-we-protect');
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.termsText
  }, "humanID gives you back control over your privacy. The non profit organization authenticates you without sharing your data or retaning your data."), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    onPress: openWeb,
    style: [_styles.default.learnMoreText, _styles.default.textSpace]
  }, "Learn More"));
}

var _default = TermDescription;
exports.default = _default;
//# sourceMappingURL=TermsDescription.js.map