import { Action, State } from './models.interface';
export declare const rootReducer: (state: State | undefined, action: Action) => {
    loginFetching: boolean;
    loginPayload: null;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
} | {
    loginFetching: boolean;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse>;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse> | null;
    loginOTPFetching: boolean;
} | {
    loginOTPFetching: boolean;
    loginOTPPayload: null;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
} | {
    loginOTPFetching: boolean;
    loginOTPPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginOTPResponse>;
    loginPayload: import("../network/network.interface").NetworkResponse<import("./models.interface").LoginResponse> | null;
    loginFetching: boolean;
};
export default rootReducer;
