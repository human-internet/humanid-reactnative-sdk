"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _themes = require("../../themes");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalLoading(props) {
  const {
    visible
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    isVisible: visible,
    coverScreen: true,
    backdropOpacity: 0.5,
    animationIn: "fadeIn",
    animationOut: "fadeOut"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerModalLoading
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    size: "large",
    color: _themes.colors.black
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.textLoading
  }, "Loading...")));
}

var _default = ModalLoading;
exports.default = _default;
//# sourceMappingURL=ModalLoading.js.map