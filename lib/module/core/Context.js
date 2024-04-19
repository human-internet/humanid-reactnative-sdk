import React from 'react';
import rootState from '../models/rootState';
const Context = /*#__PURE__*/React.createContext({
  state: rootState,
  webLoginRequest: () => {},
  loginRequest: () => {},
  loginOTPRequest: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  countryCode: 'us',
  setCountryCode: () => {},
  loginVisible: false,
  setLoginVisible: () => {},
  loginOTPVisible: false,
  setLoginOTPVisible: () => {},
  webLoginModalVisible: false,
  setWebLoginModalVisible: () => {},
  webLoginUrl: '',
  setWebLoginUrlToView: () => {},
  clearState: () => {},
  resetReducer: () => {}
});
export { Context };
//# sourceMappingURL=Context.js.map