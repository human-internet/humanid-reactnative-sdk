"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppName() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.appNameBold,
    textBreakStrategy: "balanced"
  }, "HumanId will not receive any"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.appNameRegular,
    textBreakStrategy: "balanced"
  }, "of your personal information."));
}

var _default = AppName;
exports.default = _default;
//# sourceMappingURL=AppName.js.map