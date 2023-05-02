import React from 'react';

import {FlagType} from '../modules/Login/Login.interface';

export interface UseGlobalState {
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
  countryCode: FlagType;
  setCountryCode: (code: FlagType) => void;
  loginVisible: boolean;
  setLoginVisible: (visible: boolean) => void;
  loginOTPVisible: boolean;
  setLoginOTPVisible: (visible: boolean) => void;
  clearState: () => void;
}


export interface ConfigureParams {
  appName: string;
  clientId: string;
  clientSecret: string;
  Icon: JSX.Element | null;
}

export interface Options {
  appName: string;
  clientId: string;
  clientSecret: string;
  Icon: JSX.Element | null;
}

type onCancelCallback = () => void;

type onErrorCallback = () => void;

type onSuccessCallback = (exchangeToken: string) => void;

export interface MainComponentRef {
  logIn: () => void;
}

export interface MainComponentProps {
  ref: (ref: MainComponentRef) => void;
}

export type IMainComponent = React.ForwardRefRenderFunction<
  MainComponentRef,
  MainComponentProps
>;

export type IHumanIDProvider = React.FunctionComponent & {
  ref: MainComponentRef | null;
};

export type IConfigureHumanID = (options: ConfigureParams) => void;

export type ILogIn = () => void;

export type IOnCancel = (callback: onCancelCallback) => void;

export type IOnError = (callback: onErrorCallback) => void;

export type IOnSuccess = (callback: onSuccessCallback) => void;

export type IUnsubscribeAllEventListener = () => void;
