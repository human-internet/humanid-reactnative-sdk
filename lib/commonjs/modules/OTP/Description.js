"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

var _Context = require("../../core/Context");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Description() {
  const {
    phoneNumber,
    countryCode
  } = (0, _react.useContext)(_Context.Context);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerDescription
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.title, _styles.default.textSpace]
  }, "Verification Number"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.description, _styles.default.textSpace]
  }, "We just sent a text to (+", (0, _helpers.getDialCode)(countryCode), ") ", phoneNumber, ". We will not save or forward this number after the verification"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.description
  }, "Please enter the 4 digit code you received via SMS to", /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.phoneNumber
  }, " (+", (0, _helpers.getDialCode)(countryCode), ") ", phoneNumber)));
}

var _default = Description;
exports.default = _default;
//# sourceMappingURL=Description.js.map