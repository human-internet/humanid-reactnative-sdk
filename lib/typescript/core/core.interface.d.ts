import { FlagType } from '../modules/Login/Login.interface';
export interface UseGlobalState {
    phoneNumber: string;
    setPhoneNumber: (number: string) => void;
    countryCode: FlagType;
    setCountryCode: (code: FlagType) => void;
    loginVisible: boolean;
    setLoginVisible: (visible: boolean) => void;
    loginOTPVisible: boolean;
    setLoginOTPVisible: (visible: boolean) => void;
    webLoginModalVisible: boolean;
    setWebLoginModalVisible: (visible: boolean) => void;
    webLoginUrl: string;
    setWebLoginUrlToView: (url: string) => void;
    clearState: () => void;
}
import React from 'react';
export interface ConfigureParams {
    clientId: string;
    clientSecret: string;
}
export interface Options {
    clientId: string;
    clientSecret: string;
}
declare type onCancelCallback = () => void;
declare type onErrorCallback = () => void;
declare type onSuccessCallback = (exchangeToken: string) => void;
export interface MainComponentRef {
    logIn: () => void;
}
export interface MainComponentProps {
    ref: (ref: MainComponentRef) => void;
}
export declare type IMainComponent = React.ForwardRefRenderFunction<MainComponentRef, MainComponentProps>;
export declare type IHumanIDProvider = React.FunctionComponent & {
    ref: MainComponentRef | null;
};
export declare type IConfigureHumanID = (options: ConfigureParams) => void;
export declare type ILogIn = () => void;
export declare type IOnCancel = (callback: onCancelCallback) => void;
export declare type IOnError = (callback: onErrorCallback) => void;
export declare type IOnSuccess = (callback: onSuccessCallback) => void;
export declare type IUnsubscribeAllEventListener = () => void;
export {};
