import React from 'react';
import { LoginOTPRequest, LoginRequest, State, WebLoginRequest } from '../models/models.interface';
import { UseGlobalState } from './core.interface';
interface Context extends UseGlobalState {
    state: State;
    webLoginRequest: (params: WebLoginRequest) => void;
    loginRequest: (params: LoginRequest) => void;
    loginOTPRequest: (params: LoginOTPRequest) => void;
    resetReducer: () => void;
}
declare const Context: React.Context<Context>;
export { Context };
