import { LoginOTPRequest, LoginResponse, LoginRequest, LoginOTPResponse } from '../models/models.interface';
import { NetworkResponse } from './network.interface';
export declare function postLoginOTP(params: LoginOTPRequest): Promise<NetworkResponse<LoginOTPResponse>>;
export declare function postLogin(params: LoginRequest): Promise<NetworkResponse<LoginResponse>>;
