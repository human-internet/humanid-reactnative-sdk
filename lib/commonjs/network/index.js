"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLoginOTP = postLoginOTP;
exports.postLogin = postLogin;

var _xhr = _interopRequireDefault(require("./xhr"));

var _eventManager = require("../core/eventManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const defaultError = e => ({
  success: false,
  code: 'FAILURE',
  message: "Something wrong while requesting network ".concat(e),
  data: null
});

const catchErrorMessage = e => {
  return (e === null || e === void 0 ? void 0 : e.message) || e;
};

async function postLoginOTP(params) {
  try {
    const response = await (0, _xhr.default)('/users/login/request-otp', params);
    return { ...response
    };
  } catch (e) {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, catchErrorMessage(e));

    return defaultError(catchErrorMessage(e));
  }
}

async function postLogin(params) {
  try {
    const response = await (0, _xhr.default)('/users/login', params);
    return { ...response
    };
  } catch (e) {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, catchErrorMessage(e));

    return defaultError(catchErrorMessage(e));
  }
}
//# sourceMappingURL=index.js.map