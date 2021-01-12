import { FlagType } from '../modules/Login/Login.interface';
export interface UseGlobalState {
    phoneNumber: string;
    setPhoneNumber: (number: string) => void;
    countryCode: FlagType;
    setCountryCode: (code: FlagType) => void;
    permissionVisible: boolean;
    setPermissionVisible: (visible: boolean) => void;
    permissionIsContinue: boolean;
    setPermissionIsContinue: (isContinue: boolean) => void;
    loginVisible: boolean;
    setLoginVisible: (visible: boolean) => void;
    loginOTPVisible: boolean;
    setLoginOTPVisible: (visible: boolean) => void;
    clearState: () => void;
}
import React from 'react';
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
declare type onCancelCallback = () => void;
declare type onErrorCallback = (message: string) => void;
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
export {};
