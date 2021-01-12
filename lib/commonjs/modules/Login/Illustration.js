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

function Illustration() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.images.logoOutline,
    style: _styles.default.illustration
  });
}

var _default = Illustration;
exports.default = _default;
//# sourceMappingURL=Illustration.js.map