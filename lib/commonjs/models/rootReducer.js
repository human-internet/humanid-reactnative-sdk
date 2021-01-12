"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.rootReducer = void 0;

var _loginModel = require("./loginModel");

var _loginOTPModel = require("./loginOTPModel");

var _rootState = _interopRequireDefault(require("./rootState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RESET = 'RESET';

const rootReducer = (state = _rootState.default, action) => {
  switch (action.type) {
    case _loginModel.LOGIN_REQUEST:
      return { ...state,
        loginFetching: true,
        loginPayload: null
      };

    case _loginModel.LOGIN_CALLBACK:
      return { ...state,
        loginFetching: false,
        loginPayload: action.payload
      };

    case _loginOTPModel.LOGIN_OTP_REQUEST:
      return { ...state,
        loginOTPFetching: true,
        loginOTPPayload: null
      };

    case _loginOTPModel.LOGIN_OTP_CALLBACK:
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

exports.rootReducer = rootReducer;
var _default = rootReducer;
exports.default = _default;
//# sourceMappingURL=rootReducer.js.map