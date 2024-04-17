import { LOGIN_CALLBACK, LOGIN_REQUEST } from './loginModel';
import { LOGIN_OTP_CALLBACK, LOGIN_OTP_REQUEST } from './loginOTPModel';
import { WEB_LOGIN_CALLBACK, WEB_LOGIN_REQUEST } from './webLoginModel';
import rootState from './rootState';
const RESET = 'RESET';
export const rootReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rootState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state,
        loginFetching: true,
        loginPayload: null
      };

    case LOGIN_CALLBACK:
      return { ...state,
        loginFetching: false,
        loginPayload: action.payload
      };

    case LOGIN_OTP_REQUEST:
      return { ...state,
        loginOTPFetching: true,
        loginOTPPayload: null
      };

    case LOGIN_OTP_CALLBACK:
      return { ...state,
        loginOTPFetching: false,
        loginOTPPayload: action.payload
      };

    case WEB_LOGIN_REQUEST:
      return { ...state,
        webLoginFetching: true,
        webLoginPayload: null
      };

    case WEB_LOGIN_CALLBACK:
      return { ...state,
        webLoginFetching: false,
        webLoginPayload: action.payload
      };

    case RESET:
      return {
        loginFetching: false,
        loginPayload: null,
        webLoginFetching: false,
        webLoginPayload: null,
        loginOTPFetching: false,
        loginOTPPayload: null
      };
  }
};
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map