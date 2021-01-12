import React, { useReducer } from 'react';
import ModalLogin from './ModalLogin';
import Login from './Login';
import { Context } from '../core/Context';
import { checkClient } from '../helpers';
import useGlobalState from '../core/useGlobalState';
import rootReducer from '../models/rootReducer';
import rootState from '../models/rootState';
import { loginAction } from '../models/loginModel';
import { loginOTPAction } from '../models/loginOTPModel';

const MainComponent = (_props, ref) => {
  checkClient();
  const [state, dispatch] = useReducer(rootReducer, rootState);
  const {
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
  } = useGlobalState();

  const loginRequest = async params => {
    await loginAction.loginRequest(dispatch, params);
  };

  const loginOTPRequest = async params => {
    await loginOTPAction.loginOTPRequest(dispatch, params);
  };

  const resetReducer = () => {
    dispatch({
      type: 'RESET'
    });
  };

  React.useImperativeHandle(ref, () => ({
    logIn: () => setPermissionVisible(true)
  }));
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      state,
      loginRequest,
      loginOTPRequest,
      resetReducer,
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
    }
  }, /*#__PURE__*/React.createElement(ModalLogin, null), /*#__PURE__*/React.createElement(Login, null));
};

export default /*#__PURE__*/React.forwardRef(MainComponent);
//# sourceMappingURL=MainComponent.js.map