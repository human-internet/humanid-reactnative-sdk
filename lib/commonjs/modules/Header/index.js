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

function Header() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.header
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    style: _styles.default.logo,
    source: _themes.images.logoWhite
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.text
  }, "Anonymous Login with"), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "cover",
    style: _styles.default.logoText,
    source: _themes.images.logoTextWhite
  }));
}

var _default = Header;
exports.default = _default;
//# sourceMappingURL=index.js.map