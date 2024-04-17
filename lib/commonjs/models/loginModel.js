"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginAction = exports.LOGIN_CALLBACK = exports.LOGIN_REQUEST = void 0;

var _network = require("../network");

const LOGIN_REQUEST = 'LOGIN_REQUEST';
exports.LOGIN_REQUEST = LOGIN_REQUEST;
const LOGIN_CALLBACK = 'LOGIN_CALLBACK';
exports.LOGIN_CALLBACK = LOGIN_CALLBACK;
const loginAction = {
  loginRequest: async (dispatch, params) => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    const response = await (0, _network.postLogin)(params);
    dispatch({
      type: 'LOGIN_CALLBACK',
      payload: response
    });
  }
};
exports.loginAction = loginAction;
//# sourceMappingURL=loginModel.js.map