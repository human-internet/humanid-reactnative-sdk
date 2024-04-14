"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _Header = _interopRequireDefault(require("../Header"));

var _styles = _interopRequireDefault(require("./styles"));

var _Description = _interopRequireDefault(require("./Description"));

var _Form = _interopRequireDefault(require("./Form"));

var _ModalLoading = _interopRequireDefault(require("./ModalLoading"));

var _Context = require("../../core/Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OTP() {
  const {
    loginOTPVisible,
    setLoginOTPVisible,
    state
  } = (0, _react.useContext)(_Context.Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    style: _styles.default.modal,
    isVisible: loginOTPVisible,
    backdropOpacity: 0,
    animationIn: _reactNative.Platform.OS === 'ios' ? 'slideInRight' : 'slideInUp',
    onBackdropPress: hideSelf,
    onBackButtonPress: hideSelf,
    swipeThreshold: 200,
    swipeDirection: ['right'],
    onSwipeComplete: hideSelf,
    coverScreen: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_Description.default, null), /*#__PURE__*/_react.default.createElement(_Form.default, null)), /*#__PURE__*/_react.default.createElement(_ModalLoading.default, {
    visible: state.loginFetching
  })));
}

var _default = OTP;
exports.default = _default;
//# sourceMappingURL=index.js.map