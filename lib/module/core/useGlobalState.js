/* eslint-disable prettier/prettier */
import React from 'react';

function useGlobalState() {
  const [phoneNumber, handlePhoneNumber] = React.useState('');
  const [countryCode, handleCountryCode] = React.useState('us');
  const [loginVisible, handleLoginVisible] = React.useState(false);
  const [loginOTPVisible, handleLoginOTPVisible] = React.useState(false);
  const [webLoginModalVisible, handleWebLoginVisible] = React.useState(false);
  const [webLoginUrl, setWebLoginUrl] = React.useState('');

  const clearState = () => {
    setTimeout(() => {
      handleLoginVisible(false);
      handlePhoneNumber('');
      handleWebLoginVisible(false);
      setWebLoginUrl('');
      handleWebLoginVisible(false);
      setWebLoginUrl('');
    }, 0);
    setTimeout(() => {
      handleCountryCode('us');
      handleLoginOTPVisible(false);
    }, 500);
  };

  const setPhoneNumber = number => {
    handlePhoneNumber(number);
  };

  const setCountryCode = country => {
    handleCountryCode(country);
  };

  const setLoginVisible = visible => {
    handleLoginVisible(visible);
  };

  const setLoginOTPVisible = visible => {
    handleLoginOTPVisible(visible);
  };

  const setWebLoginModalVisible = visible => {
    handleWebLoginVisible(visible);
  };

  const setWebLoginUrlToView = url => {
    setWebLoginUrl(url);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    webLoginModalVisible,
    setWebLoginModalVisible,
    webLoginUrl,
    setWebLoginUrlToView,
    clearState
  };
}

export default useGlobalState;
//# sourceMappingURL=useGlobalState.js.map