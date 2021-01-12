import { Action, LoginRequest } from './models.interface';
import { Dispatch } from 'react';
export declare const LOGIN_REQUEST = "LOGIN_REQUEST";
export declare const LOGIN_CALLBACK = "LOGIN_CALLBACK";
export declare const loginAction: {
    loginRequest: (dispatch: Dispatch<Action>, params: LoginRequest) => Promise<void>;
};
