import { NetworkResponse } from '../network/network.interface';
export interface State {
    loginPayload: NetworkResponse<LoginResponse> | null;
    loginFetching: boolean;
    loginOTPPayload: NetworkResponse<LoginOTPResponse> | null;
    loginOTPFetching: boolean;
    webLoginPayload: NetworkResponse<WebLoginResponse> | null;
    webLoginFetching: boolean;
}
export declare type ActionMap<M extends {
    [index: string]: any;
}> = {
    [Key in keyof M]: M[Key] extends undefined ? {
        type: Key;
    } : {
        type: Key;
        payload: M[Key];
    };
};
export declare type LoginActionType = {
    LOGIN_REQUEST: undefined;
    LOGIN_CALLBACK: NetworkResponse<LoginResponse>;
};
export declare type LoginAction = ActionMap<LoginActionType>[keyof ActionMap<LoginActionType>];
export declare type LoginOTPActionType = {
    LOGIN_OTP_REQUEST: undefined;
    LOGIN_OTP_CALLBACK: NetworkResponse<LoginOTPResponse>;
};
export declare type LoginOTPAction = ActionMap<LoginOTPActionType>[keyof ActionMap<LoginOTPActionType>];
export declare type ResetActionType = {
    RESET: undefined;
};
export declare type ResetAction = ActionMap<ResetActionType>[keyof ActionMap<ResetActionType>];
export interface LoginRequest {
    countryCode: string;
    phone: string;
    deviceId: string;
    verificationCode: string;
    notifId?: 'NONE';
}
export interface LoginOTPRequest {
    countryCode: string;
    phone: string;
}
export interface LoginResponse {
    exchangeToken: string;
}
export interface LoginOTPResponse {
    requestId: string;
    nextResendAt: number;
    failAttemptCount: number;
    otpCount: number;
    config: {
        otpSessionLifetime: number;
        otpCountLimit: number;
        failAttemptLimit: number;
        nextResendDelay: number;
        otpCodeLength: number;
    };
}
export declare type WebLoginActionType = {
    WEB_LOGIN_REQUEST: undefined;
    WEB_LOGIN_CALLBACK: NetworkResponse<WebLoginResponse>;
};
export declare type WebLoginAction = ActionMap<WebLoginActionType>[keyof ActionMap<WebLoginActionType>];
export interface WebLoginRequest {
    lang: string;
}
export interface WebLoginResponse {
    webLoginURL: string;
}
export declare type Action = LoginOTPAction | LoginAction | ResetAction | WebLoginAction;
