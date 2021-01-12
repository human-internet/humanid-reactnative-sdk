"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _options = _interopRequireDefault(require("../../core/options"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Description() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.centerContent
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.desc, _styles.default.textSpace]
  }, "HumanID confirms your phone number without sharing it with ", _options.default.appName), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.desc, _styles.default.textSpace]
  }, "Your data is permanently deleted after verification."));
}

var _default = Description;
exports.default = _default;
//# sourceMappingURL=Description.js.map