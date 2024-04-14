import { Action, LoginOTPRequest } from './models.interface';
import { Dispatch } from 'react';
export declare const LOGIN_OTP_REQUEST = "LOGIN_OTP_REQUEST";
export declare const LOGIN_OTP_CALLBACK = "LOGIN_OTP_CALLBACK";
export declare const loginOTPAction: {
    loginOTPRequest: (dispatch: Dispatch<Action>, params: LoginOTPRequest) => Promise<void>;
};
