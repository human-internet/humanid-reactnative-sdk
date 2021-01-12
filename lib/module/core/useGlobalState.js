/* eslint-disable prettier/prettier */
import React from 'react';

function useGlobalState() {
  const [phoneNumber, handlePhoneNumber] = React.useState('');
  const [countryCode, handleCountryCode] = React.useState('us');
  const [permissionVisible, handlePermissionVisible] = React.useState(false);
  const [permissionIsContinue, handlePermissionIsContinue] = React.useState(false);
  const [loginVisible, handleLoginVisible] = React.useState(false);
  const [loginOTPVisible, handleLoginOTPVIsible] = React.useState(false);

  const clearState = () => {
    if (loginOTPVisible) {
      handlePhoneNumber('');
      handleLoginOTPVIsible(false);
    }

    setTimeout(() => {
      handlePhoneNumber('');
      handleCountryCode('us');
      handlePermissionVisible(false);
      handlePermissionIsContinue(false);
      handleLoginVisible(false);
    }, loginOTPVisible ? 500 : 0);
  };

  const setPhoneNumber = number => {
    handlePhoneNumber(number);
  };

  const setCountryCode = country => {
    handleCountryCode(country);
  };

  const setPermissionVisible = visible => {
    handlePermissionVisible(visible);
  };

  const setPermissionIsContinue = isContinue => {
    handlePermissionIsContinue(isContinue);
  };

  const setLoginVisible = visible => {
    handleLoginVisible(visible);
  };

  const setLoginOTPVisible = visible => {
    handleLoginOTPVIsible(visible);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    permissionVisible,
    setPermissionVisible,
    permissionIsContinue,
    setPermissionIsContinue,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    clearState
  };
}

export default useGlobalState;
//# sourceMappingURL=useGlobalState.js.map