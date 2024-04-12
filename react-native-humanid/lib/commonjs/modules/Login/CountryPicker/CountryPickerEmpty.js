"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CountryPickerEmpty() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.textCountryNotFound
  }, "Country not found");
}

var _default = CountryPickerEmpty;
exports.default = _default;
//# sourceMappingURL=CountryPickerEmpty.js.map