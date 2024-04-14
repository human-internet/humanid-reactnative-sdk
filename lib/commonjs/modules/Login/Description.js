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

function Description() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.centerContent
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _styles.default.iconLock,
    source: _themes.images.iconLock
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.desc
  }, "Your phone number is deleted after verification"));
}

var _default = Description;
exports.default = _default;
//# sourceMappingURL=Description.js.map