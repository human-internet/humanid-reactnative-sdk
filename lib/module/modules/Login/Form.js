import React, { useContext, useEffect } from 'react';
import { Keyboard, TextInput, View } from 'react-native';
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
    setCountryCode,
    countryCode,
    loginOTPRequest
  } = useContext(Context);
  useEffect(() => {
    var _state$loginOTPPayloa;

    if ((_state$loginOTPPayloa = state.loginOTPPayload) !== null && _state$loginOTPPayloa !== void 0 && _state$loginOTPPayloa.success) {
      setLoginOTPVisible(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginOTPPayload]);

  const handleChangeText = text => {
    if (isNaN(Number(text))) {
      return;
    }

    setPhoneNumber(text);
  };

  const handleCountrySelected = item => {
    setCountryCode(item.iso2);
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
    onSelected: handleCountrySelected
  }), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.textInput,
    keyboardType: "phone-pad",
    onChangeText: handleChangeText,
    value: phoneNumber,
    placeholder: "Phone Number",
    placeholderTextColor: colors.white,
    maxLength: 15
  }), /*#__PURE__*/React.createElement(Button, {
    enabled: isSubmitEnabled(),
    onPress: handleSubmit
  }));
}

export default Form;
//# sourceMappingURL=Form.js.map