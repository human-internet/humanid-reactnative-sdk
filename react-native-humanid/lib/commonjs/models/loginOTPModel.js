"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginOTPAction = exports.LOGIN_OTP_CALLBACK = exports.LOGIN_OTP_REQUEST = void 0;

var _network = require("../network");

const LOGIN_OTP_REQUEST = 'LOGIN_OTP_REQUEST';
exports.LOGIN_OTP_REQUEST = LOGIN_OTP_REQUEST;
const LOGIN_OTP_CALLBACK = 'LOGIN_OTP_CALLBACK';
exports.LOGIN_OTP_CALLBACK = LOGIN_OTP_CALLBACK;
const loginOTPAction = {
  loginOTPRequest: async (dispatch, params) => {
    dispatch({
      type: 'LOGIN_OTP_REQUEST'
    });
    const response = await (0, _network.postLoginOTP)(params);
    dispatch({
      type: 'LOGIN_OTP_CALLBACK',
      payload: response
    });
  }
};
exports.loginOTPAction = loginOTPAction;
//# sourceMappingURL=loginOTPModel.js.map