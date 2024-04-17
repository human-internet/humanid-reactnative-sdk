"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.rootReducer = void 0;

var _loginModel = require("./loginModel");

var _loginOTPModel = require("./loginOTPModel");

var _webLoginModel = require("./webLoginModel");

var _rootState = _interopRequireDefault(require("./rootState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RESET = 'RESET';

const rootReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _rootState.default;
  let action = arguments.length > 1 ? arguments[1] : undefined;

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

    case _webLoginModel.WEB_LOGIN_REQUEST:
      return { ...state,
        webLoginFetching: true,
        webLoginPayload: null
      };

    case _webLoginModel.WEB_LOGIN_CALLBACK:
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

exports.rootReducer = rootReducer;
var _default = rootReducer;
exports.default = _default;
//# sourceMappingURL=rootReducer.js.map