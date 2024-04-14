"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _OTPInput = _interopRequireDefault(require("./OTPInput"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

var _Context = require("../../core/Context");

var _helpers = require("../../helpers");

var _reactNativeDeviceInfo = require("react-native-device-info");

var _eventManager = require("../../core/eventManager");

var _themes = require("../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Form() {
  var _state$loginOTPPayloa, _state$loginOTPPayloa2, _state$loginOTPPayloa3, _state$loginOTPPayloa4;

  const {
    state,
    loginRequest,
    loginOTPRequest,
    phoneNumber,
    countryCode,
    clearState,
    resetReducer
  } = (0, _react.useContext)(_Context.Context);
  const otpRef = (0, _react.useRef)(null);
  const timerRef = (0, _react.useRef)();
  const [timer, setTimer] = (0, _react.useState)((_state$loginOTPPayloa = (_state$loginOTPPayloa2 = state.loginOTPPayload) === null || _state$loginOTPPayloa2 === void 0 ? void 0 : (_state$loginOTPPayloa3 = _state$loginOTPPayloa2.data) === null || _state$loginOTPPayloa3 === void 0 ? void 0 : (_state$loginOTPPayloa4 = _state$loginOTPPayloa3.config) === null || _state$loginOTPPayloa4 === void 0 ? void 0 : _state$loginOTPPayloa4.nextResendDelay) !== null && _state$loginOTPPayloa !== void 0 ? _state$loginOTPPayloa : 60);

  const clearTimer = () => clearTimeout(timerRef.current);

  (0, _react.useEffect)(() => {
    return () => clearTimer();
  }, []);
  (0, _react.useEffect)(() => {
    if (timer === 0) {
      return;
    }

    function countdown() {
      setTimer(timer - 1);
    }

    timerRef.current = setTimeout(countdown, 1000);
    return () => clearTimer();
  }, [timer]);
  (0, _react.useEffect)(() => {
    if (timer === 0) {
      var _state$loginOTPPayloa5, _state$loginOTPPayloa6, _state$loginOTPPayloa7, _state$loginOTPPayloa8;

      setTimer((_state$loginOTPPayloa5 = (_state$loginOTPPayloa6 = state.loginOTPPayload) === null || _state$loginOTPPayloa6 === void 0 ? void 0 : (_state$loginOTPPayloa7 = _state$loginOTPPayloa6.data) === null || _state$loginOTPPayloa7 === void 0 ? void 0 : (_state$loginOTPPayloa8 = _state$loginOTPPayloa7.config) === null || _state$loginOTPPayloa8 === void 0 ? void 0 : _state$loginOTPPayloa8.nextResendDelay) !== null && _state$loginOTPPayloa5 !== void 0 ? _state$loginOTPPayloa5 : 60);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginOTPPayload]);
  (0, _react.useEffect)(() => {
    var _state$loginPayload;

    if ((_state$loginPayload = state.loginPayload) !== null && _state$loginPayload !== void 0 && _state$loginPayload.success) {
      const {
        exchangeToken
      } = state.loginPayload.data;

      _eventManager.EventRegister.emitEvent(_eventManager.ON_SUCCESS, exchangeToken);

      clearState();
      resetReducer();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginPayload]);

  const handleOnCodeFilled = code => {
    loginRequest({
      phone: phoneNumber,
      countryCode: (0, _helpers.getDialCode)(countryCode),
      verificationCode: code,
      deviceId: (0, _reactNativeDeviceInfo.getUniqueId)()
    });
  };

  const handleResendCode = () => {
    loginOTPRequest({
      phone: phoneNumber,
      countryCode: (0, _helpers.getDialCode)(countryCode)
    });
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.formContainer
  }, /*#__PURE__*/_react.default.createElement(_OTPInput.default, {
    ref: otpRef,
    pinCount: 4,
    style: _styles.default.otpView,
    codeInputFieldStyle: _styles.default.otpFieldStyle,
    codeInputHighlightStyle: _styles.default.otpHighlightStyle,
    keyboardType: "phone-pad",
    autoFocusOnLoad: true,
    onCodeFilled: handleOnCodeFilled,
    editable: !state.loginFetching
  }), state.loginOTPFetching ? /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    style: _styles.default.resendActivity,
    size: "small",
    color: _themes.colors.primary
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.resendCode,
    onPress: timer === 0 ? handleResendCode : () => null
  }, timer !== 0 ? `Resend code in ${(0, _helpers.otpTimerFormat)(timer)}` : 'Click here to resend code'));
}

var _default = Form;
exports.default = _default;
//# sourceMappingURL=Form.js.map