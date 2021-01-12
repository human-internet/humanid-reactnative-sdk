import React from 'react';
import rootState from '../models/rootState';
const Context = /*#__PURE__*/React.createContext({
  state: rootState,
  loginRequest: () => {},
  loginOTPRequest: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  countryCode: 'us',
  setCountryCode: () => {},
  permissionVisible: false,
  setPermissionVisible: () => {},
  permissionIsContinue: false,
  setPermissionIsContinue: () => {},
  loginVisible: false,
  setLoginVisible: () => {},
  loginOTPVisible: false,
  setLoginOTPVisible: () => {},
  clearState: () => {},
  resetReducer: () => {}
});
export { Context };
//# sourceMappingURL=Context.js.map