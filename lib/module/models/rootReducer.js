import { LOGIN_CALLBACK, LOGIN_REQUEST } from './loginModel';
import { LOGIN_OTP_CALLBACK, LOGIN_OTP_REQUEST } from './loginOTPModel';
import rootState from './rootState';
const RESET = 'RESET';
export const rootReducer = (state = rootState, action) => {
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

    case RESET:
      return {
        loginFetching: false,
        loginPayload: null,
        loginOTPFetching: false,
        loginOTPPayload: null
      };
  }
};
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map