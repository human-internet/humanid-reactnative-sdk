"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _OTP = _interopRequireDefault(require("../OTP"));

var _Header = _interopRequireDefault(require("../Header"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _Description = _interopRequireDefault(require("./Description"));

var _TermsDescription = _interopRequireDefault(require("./TermsDescription"));

var _styles = _interopRequireDefault(require("./styles"));

var _themes = require("../../themes");

var _Form = _interopRequireDefault(require("./Form"));

var _Context = require("../../core/Context");

var _eventManager = require("../../core/eventManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Login() {
  const {
    loginVisible,
    clearState,
    resetReducer
  } = (0, _react.useContext)(_Context.Context);

  const handleOnCancel = () => {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_CANCEL, true);

    resetReducer();
    clearState();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    animationInTiming: 200,
    animationOutTiming: 200,
    animationOut: "fadeOut",
    animationIn: _reactNative.Platform.OS === 'ios' ? 'slideInRight' : 'slideInUp',
    propagateSwipe: true,
    swipeThreshold: 200,
    swipeDirection: ['right'],
    onSwipeComplete: handleOnCancel,
    isVisible: loginVisible,
    onBackButtonPress: handleOnCancel,
    backdropOpacity: 1,
    backdropColor: _themes.colors.white,
    style: _styles.default.modal,
    coverScreen: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content"
  }), /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.content
  }, /*#__PURE__*/_react.default.createElement(_Description.default, null), /*#__PURE__*/_react.default.createElement(_Form.default, null), /*#__PURE__*/_react.default.createElement(_TermsDescription.default, null)))), /*#__PURE__*/_react.default.createElement(_OTP.default, null)));
}

var _default = Login;
exports.default = _default;
//# sourceMappingURL=index.js.map