import React, { useContext, useEffect, useRef } from 'react';
import { Keyboard, TextInput, View, InteractionManager } from 'react-native';
import CountryPicker from './CountryPicker';
import Button from './Button';
import styles from './styles';
import { colors } from '../../themes';
import { Context } from '../../core/Context';
import { getCountry, getDialCode } from '../../helpers';

function Form() {
  const {
    state,
    phoneNumber,
    setPhoneNumber,
    setLoginOTPVisible,
    loginVisible,
    setCountryCode,
    countryCode,
    loginOTPRequest
  } = useContext(Context);
  const inputRef = useRef();
  useEffect(() => {
    /**
     * Focus keyboard when mounting
     */
    focusPhoneNumber();
    return () => {
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);
  useEffect(() => {
    var _state$loginOTPPayloa;

    if ((_state$loginOTPPayloa = state.loginOTPPayload) !== null && _state$loginOTPPayloa !== void 0 && _state$loginOTPPayloa.success) {
      setLoginOTPVisible(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginOTPPayload]);
  React.useEffect(() => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.setNativeProps({
      style: phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.length ? styles.phoneOnTyping : styles.placeholder
    });
  }, [phoneNumber]);

  const focusPhoneNumber = () => {
    if (loginVisible) {
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
          var _inputRef$current2;

          return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
        }, 100);
      });
    }
  };

  const keyboardDidHide = () => {
    if (loginVisible) {
      var _inputRef$current3;

      (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.blur();
    }
  };

  const handleChangeText = text => {
    if (isNaN(Number(text))) {
      return;
    }

    setPhoneNumber(text);
  };

  const handleCountrySelected = item => {
    setTimeout(() => {
      Keyboard.dismiss();
    }, 0);
    setTimeout(() => {
      setCountryCode(item.iso2);
      focusPhoneNumber();
    }, 100);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    loginOTPRequest({
      phone: phoneNumber,
      countryCode: getDialCode(countryCode)
    });
  };

  const isSubmitEnabled = () => {
    if (phoneNumber.length >= 9) {
      const phoneNumberLib = require('google-libphonenumber');

      const phoneUtil = phoneNumberLib.PhoneNumberUtil.getInstance();
      const currentCountry = getCountry(countryCode);
      const iso2 = currentCountry === null || currentCountry === void 0 ? void 0 : currentCountry.iso2;
      const phoneInfo = phoneUtil.parse(phoneNumber, iso2);
      return phoneUtil.isValidNumber(phoneInfo);
    }

    return false;
  };

  return /*#__PURE__*/React.createElement(View, {
    style: styles.containerForm
  }, /*#__PURE__*/React.createElement(CountryPicker, {
    onSelected: handleCountrySelected,
    onCountryPickerShow: keyboardDidHide
  }), /*#__PURE__*/React.createElement(TextInput, {
    ref: inputRef,
    style: styles.textInput,
    keyboardType: "phone-pad",
    onChangeText: handleChangeText,
    value: phoneNumber,
    placeholder: "Phone Number",
    maxLength: 15,
    selectionColor: colors.gray,
    placeholderTextColor: colors.placeholder
  }), /*#__PURE__*/React.createElement(Button, {
    enabled: isSubmitEnabled(),
    onPress: handleSubmit
  }));
}

export default Form;
//# sourceMappingURL=Form.js.map