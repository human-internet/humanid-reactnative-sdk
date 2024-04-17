import { Action, State } from './models.interface';
export declare const rootReducer: (state: State | undefined, action: Action) => {
    loginFetching: boolean;
    loginPayload: null;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
    webLoginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").WebLoginResponse> | null;
    webLoginFetching: boolean;
} | {
    loginFetching: boolean;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse>;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
    webLoginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").WebLoginResponse> | null;
    webLoginFetching: boolean;
} | {
    loginOTPFetching: boolean;
    loginOTPPayload: null;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
    webLoginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").WebLoginResponse> | null;
    webLoginFetching: boolean;
} | {
    loginOTPFetching: boolean;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse>;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
    webLoginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").WebLoginResponse> | null;
    webLoginFetching: boolean;
} | {
    webLoginFetching: boolean;
    webLoginPayload: null;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
} | {
    webLoginFetching: boolean;
    webLoginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").WebLoginResponse>;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
};
export default rootReducer;
