"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AppName = _interopRequireDefault(require("./AppName"));

var _styles = _interopRequireDefault(require("./styles"));

var _options = _interopRequireDefault(require("../../core/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo() {
  const {
    Icon
  } = _options.default;

  if (Icon === null) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerIconAppName
  }, /*#__PURE__*/_react.default.createElement(Icon, null), /*#__PURE__*/_react.default.createElement(_AppName.default, null));
}

var _default = Logo;
exports.default = _default;
//# sourceMappingURL=Logo.js.map