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

  const [loginVisible, handleLoginVisible] = _react.default.useState(false);

  const [loginOTPVisible, handleLoginOTPVisible] = _react.default.useState(false);

  const [webLoginModalVisible, handleWebLoginVisible] = _react.default.useState(false);

  const [webLoginUrl, setWebLoginUrl] = _react.default.useState('');

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

var _default = useGlobalState;
exports.default = _default;
//# sourceMappingURL=useGlobalState.js.map