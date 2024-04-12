import React, { useContext, useEffect, useRef, useState } from 'react';
import OTPInputView from './OTPInput';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Context } from '../../core/Context';
import { getDialCode, otpTimerFormat } from '../../helpers';
import { getUniqueId } from 'react-native-device-info';
import { EventRegister, ON_SUCCESS } from '../../core/eventManager';
import { colors } from '../../themes';

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
  } = useContext(Context);
  const otpRef = useRef(null);
  const timerRef = useRef();
  const [timer, setTimer] = useState((_state$loginOTPPayloa = (_state$loginOTPPayloa2 = state.loginOTPPayload) === null || _state$loginOTPPayloa2 === void 0 ? void 0 : (_state$loginOTPPayloa3 = _state$loginOTPPayloa2.data) === null || _state$loginOTPPayloa3 === void 0 ? void 0 : (_state$loginOTPPayloa4 = _state$loginOTPPayloa3.config) === null || _state$loginOTPPayloa4 === void 0 ? void 0 : _state$loginOTPPayloa4.nextResendDelay) !== null && _state$loginOTPPayloa !== void 0 ? _state$loginOTPPayloa : 60);

  const clearTimer = () => clearTimeout(timerRef.current);

  useEffect(() => {
    return () => clearTimer();
  }, []);
  useEffect(() => {
    if (timer === 0) {
      return;
    }

    function countdown() {
      setTimer(timer - 1);
    }

    timerRef.current = setTimeout(countdown, 1000);
    return () => clearTimer();
  }, [timer]);
  useEffect(() => {
    if (timer === 0) {
      var _state$loginOTPPayloa5, _state$loginOTPPayloa6, _state$loginOTPPayloa7, _state$loginOTPPayloa8;

      setTimer((_state$loginOTPPayloa5 = (_state$loginOTPPayloa6 = state.loginOTPPayload) === null || _state$loginOTPPayloa6 === void 0 ? void 0 : (_state$loginOTPPayloa7 = _state$loginOTPPayloa6.data) === null || _state$loginOTPPayloa7 === void 0 ? void 0 : (_state$loginOTPPayloa8 = _state$loginOTPPayloa7.config) === null || _state$loginOTPPayloa8 === void 0 ? void 0 : _state$loginOTPPayloa8.nextResendDelay) !== null && _state$loginOTPPayloa5 !== void 0 ? _state$loginOTPPayloa5 : 60);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginOTPPayload]);
  useEffect(() => {
    var _state$loginPayload;

    if ((_state$loginPayload = state.loginPayload) !== null && _state$loginPayload !== void 0 && _state$loginPayload.success) {
      const {
        exchangeToken
      } = state.loginPayload.data;
      EventRegister.emitEvent(ON_SUCCESS, exchangeToken);
      clearState();
      resetReducer();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginPayload]);

  const handleOnCodeFilled = code => {
    loginRequest({
      phone: phoneNumber,
      countryCode: getDialCode(countryCode),
      verificationCode: code,
      deviceId: getUniqueId()
    });
  };

  const handleResendCode = () => {
    loginOTPRequest({
      phone: phoneNumber,
      countryCode: getDialCode(countryCode)
    });
  };

  return /*#__PURE__*/React.createElement(View, {
    style: styles.formContainer
  }, /*#__PURE__*/React.createElement(OTPInputView, {
    ref: otpRef,
    pinCount: 4,
    style: styles.otpView,
    codeInputFieldStyle: styles.otpFieldStyle,
    codeInputHighlightStyle: styles.otpHighlightStyle,
    keyboardType: "phone-pad",
    autoFocusOnLoad: true,
    onCodeFilled: handleOnCodeFilled,
    editable: !state.loginFetching
  }), state.loginOTPFetching ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    style: styles.resendActivity,
    size: "small",
    color: colors.primary
  }) : /*#__PURE__*/React.createElement(Text, {
    style: styles.resendCode,
    onPress: timer === 0 ? handleResendCode : () => null
  }, timer !== 0 ? `Resend code in ${otpTimerFormat(timer)}` : 'Click here to resend code'));
}

export default Form;
//# sourceMappingURL=Form.js.map