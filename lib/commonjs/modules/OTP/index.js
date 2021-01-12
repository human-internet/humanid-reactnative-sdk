"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _styles = _interopRequireDefault(require("./styles"));

var _Description = _interopRequireDefault(require("./Description"));

var _Form = _interopRequireDefault(require("./Form"));

var _Context = require("../../core/Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OTP() {
  const {
    loginOTPVisible,
    setLoginOTPVisible
  } = (0, _react.useContext)(_Context.Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    style: _styles.default.modal,
    isVisible: loginOTPVisible,
    backdropOpacity: 0.3,
    onBackdropPress: hideSelf,
    onBackButtonPress: hideSelf
  }, /*#__PURE__*/_react.default.createElement(_reactNative.KeyboardAvoidingView, {
    style: _styles.default.keyboardAvoid,
    behavior: _reactNative.Platform.OS === 'ios' ? 'padding' : 'height'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerDescForm
  }, /*#__PURE__*/_react.default.createElement(_Description.default, null), /*#__PURE__*/_react.default.createElement(_Form.default, null)))));
}

var _default = OTP;
exports.default = _default;
//# sourceMappingURL=index.js.map