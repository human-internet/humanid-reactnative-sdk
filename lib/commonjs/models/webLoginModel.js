"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webLoginAction = exports.WEB_LOGIN_CALLBACK = exports.WEB_LOGIN_REQUEST = void 0;

var _network = require("../network");

const WEB_LOGIN_REQUEST = 'WEB_LOGIN_REQUEST';
exports.WEB_LOGIN_REQUEST = WEB_LOGIN_REQUEST;
const WEB_LOGIN_CALLBACK = 'WEB_LOGIN_CALLBACK';
exports.WEB_LOGIN_CALLBACK = WEB_LOGIN_CALLBACK;
const webLoginAction = {
  webLoginRequest: async (dispatch, params) => {
    dispatch({
      type: 'WEB_LOGIN_REQUEST'
    });
    const response = await (0, _network.postWebLogin)(params);
    dispatch({
      type: 'WEB_LOGIN_CALLBACK',
      payload: response
    });
  }
};
exports.webLoginAction = webLoginAction;
//# sourceMappingURL=webLoginModel.js.map