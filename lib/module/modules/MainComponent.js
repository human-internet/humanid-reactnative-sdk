import React, { useReducer } from 'react';
import { Context } from '../core/Context';
import { checkClient } from '../helpers';
import useGlobalState from '../core/useGlobalState';
import rootReducer from '../models/rootReducer';
import rootState from '../models/rootState';
import { loginAction } from '../models/loginModel';
import { loginOTPAction } from '../models/loginOTPModel';
import { webLoginAction } from "../models/webLoginModel";
import WebLogin from "./WebLogin";
import { EventRegister, ON_ERROR } from "../core/eventManager";
import options from "../core/options";

const MainComponent = (_props, ref) => {
  checkClient();
  const [state, dispatch] = useReducer(rootReducer, rootState);
  const {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    webLoginUrl,
    setWebLoginUrlToView,
    webLoginModalVisible,
    setWebLoginModalVisible,
    clearState
  } = useGlobalState();

  const loginRequest = async params => {
    await loginAction.loginRequest(dispatch, params);
  };

  const loginOTPRequest = async params => {
    await loginOTPAction.loginOTPRequest(dispatch, params);
  };

  const webLoginRequest = async params => {
    await webLoginAction.webLoginRequest(dispatch, params);
  };

  const getWebLogin = async params => {
    try {
      setWebLoginModalVisible(true);
      let baseUrl = 'https://api.human-id.org/v1/';
      let endPointUrl = 'mobile/users/web-login';
      const response = await fetch(baseUrl + endPointUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'client-secret': options.clientSecret,
          'client-id': options.clientId
        },
        body: JSON.stringify(params)
      });
      const json = await response.json();

      if (json.data != null) {
        setWebLoginUrlToView(json.data.webLoginUrl);
      } else {
        setWebLoginModalVisible(false);
        console.error(json.message);
        EventRegister.emitEvent(ON_ERROR, json.message);
      }
    } catch (error) {
      setWebLoginModalVisible(false);
      EventRegister.emitEvent(ON_ERROR, 'Login Failed');
    }
  };

  const resetReducer = () => {
    dispatch({
      type: "RESET"
    });
  };

  React.useImperativeHandle(ref, () => ({
    logIn: () => getWebLogin({
      lang: 'en'
    })
  }));
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      state,
      loginRequest,
      loginOTPRequest,
      webLoginRequest,
      resetReducer,
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
    }
  }, /*#__PURE__*/React.createElement(WebLogin, null));
};

export default /*#__PURE__*/React.forwardRef(MainComponent);
//# sourceMappingURL=MainComponent.js.map