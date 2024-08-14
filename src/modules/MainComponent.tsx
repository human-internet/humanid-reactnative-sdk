import WebView from "react-native-webview";
import React, { useReducer, useState } from "react";
import { View } from "react-native";

import Toast from "../modules/Toast";
import WebLogin from "./WebLogin";
import options from "../core/options";
import rootReducer from "../models/rootReducer";
import rootState from "../models/rootState";
import useGlobalState from "../core/useGlobalState";
import { Context } from "../core/Context";
import { EventRegister, ON_ERROR } from "../core/eventManager";
import { HUMAN_ID_DEEPLINK_ERROR_PREFIX, HUMAN_ID_DEEPLINK_EXCHANGE_TOKEN_PREFIX, HUMAN_ID_DEEPLINK_PREFIX, SUCCESFUL_LOGIN_MESSAGE, UNKNOWN_ERROR_MESSAGE } from "../string/label";
import { IHandleDeepLink, IMainComponent } from "../core/core.interface";
import {
  LoginOTPRequest,
  LoginRequest,
  WebLoginRequest,
} from "../models/models.interface";
import { checkClient } from "../helpers";
import { loginAction } from "../models/loginModel";
import { loginOTPAction } from "../models/loginOTPModel";
import { webLoginAction } from "../models/webLoginModel";

const MainComponent: IMainComponent = (_props, ref): React.ReactElement => {
  checkClient();

  const [state, dispatch] = useReducer(rootReducer, rootState);
  const [initLoad, setInitLoad] = useState(false);
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
    clearState,
  } = useGlobalState();

  const loginRequest = async (params: LoginRequest) => {
    await loginAction.loginRequest(dispatch, params);
  };

  const loginOTPRequest = async (params: LoginOTPRequest) => {
    await loginOTPAction.loginOTPRequest(dispatch, params);
  };

  const webLoginRequest = async (params: WebLoginRequest) => {
    await webLoginAction.webLoginRequest(dispatch, params);
  };

  const getWebLogin = async (params: WebLoginRequest) => {
    try {
      setWebLoginModalVisible(true);
      let baseUrl = "https://api.human-id.org/v1/";
      let endPointUrl = "mobile/users/web-login";
      const response = await fetch(baseUrl + endPointUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "client-secret": options.clientSecret,
          "client-id": options.clientId,
        },
        body: JSON.stringify(params),
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
      EventRegister.emitEvent(ON_ERROR, "Login Failed");
    }
  };

  const resetReducer = () => {
    dispatch({
      type: "RESET",
    });
  };

  const closeWebLogin = () => {
    setWebLoginModalVisible(false);
  };

  const handleDeepLink: IHandleDeepLink = (deepLink, onSuccess, onError = () => {}) => {
    if(!deepLink?.includes(`${HUMAN_ID_DEEPLINK_PREFIX}${options.appExtId}`)) return;

    if(deepLink?.includes(`${HUMAN_ID_DEEPLINK_PREFIX}${options.appExtId}`)) {
      if(deepLink?.includes(HUMAN_ID_DEEPLINK_EXCHANGE_TOKEN_PREFIX)) {
        const exchangeToken = deepLink?.split(HUMAN_ID_DEEPLINK_EXCHANGE_TOKEN_PREFIX)[1];
        onSuccess(exchangeToken);
        setTimeout(() => {
          Toast.show(SUCCESFUL_LOGIN_MESSAGE, 6000);
        }, 500);
      } else if(deepLink?.includes(HUMAN_ID_DEEPLINK_ERROR_PREFIX)) {
        const error = deepLink?.split(HUMAN_ID_DEEPLINK_ERROR_PREFIX)[1];
        onError(error);
        setTimeout(() => {
          Toast.show(error, 4000);
        }, 500)
      } else {
        onError('Unknown error');
        setTimeout(() => {
          Toast.show(UNKNOWN_ERROR_MESSAGE, 4000);
        }, 500)
      }
    }

    closeWebLogin();
  }

  React.useImperativeHandle(ref, () => ({
    logIn: () =>
      getWebLogin({
        lang: "en",
      }),
    handleDeepLink
  }));

  return (
    <Context.Provider
      value={{
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
        clearState,
      }}
    >
      {initLoad ? (
        <WebLogin />
      ) : (
        <View style={{ height: 0, width: 0 }}>
          <WebView
            source={{ uri: "https://web-login.human-id.org/login" }}
            onLoad={() => {
              setInitLoad(true);
            }}
          />
        </View>
      )}
    </Context.Provider>
  );
};

export default React.forwardRef(MainComponent);
