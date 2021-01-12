"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
function useGlobalState() {
  const [phoneNumber, handlePhoneNumber] = _react.default.useState('');

  const [countryCode, handleCountryCode] = _react.default.useState('us');

  const [permissionVisible, handlePermissionVisible] = _react.default.useState(false);

  const [permissionIsContinue, handlePermissionIsContinue] = _react.default.useState(false);

  const [loginVisible, handleLoginVisible] = _react.default.useState(false);

  const [loginOTPVisible, handleLoginOTPVIsible] = _react.default.useState(false);

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

var _default = useGlobalState;
exports.default = _default;
//# sourceMappingURL=useGlobalState.js.map