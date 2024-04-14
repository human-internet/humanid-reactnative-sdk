"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLoginOTP = postLoginOTP;
exports.postLogin = postLogin;
exports.postWebLogin = postWebLogin;

var _xhr = _interopRequireDefault(require("./xhr"));

var _eventManager = require("../core/eventManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const defaultError = e => ({
  success: false,
  code: 'FAILURE',
  message: `Something wrong while requesting network ${e}`,
  data: null
});

const catchErrorMessage = e => {
  return (e === null || e === void 0 ? void 0 : e.message) || e;
};

const catchErrorMessageRequestOTP = e => {
  if ((e === null || e === void 0 ? void 0 : e.code) !== '401') return 'Unable to request otp at this time. Please try again later';
  return (e === null || e === void 0 ? void 0 : e.message) || e;
};

async function postLoginOTP(params) {
  try {
    const response = await (0, _xhr.default)('/users/login/request-otp', params);
    return { ...response
    };
  } catch (e) {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, catchErrorMessageRequestOTP(e));

    return defaultError(catchErrorMessageRequestOTP(e));
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

async function postWebLogin(params) {
  try {
    const response = await (0, _xhr.default)('/users/web-login', params);
    return { ...response
    };
  } catch (e) {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, catchErrorMessage(e));

    return defaultError(catchErrorMessage(e));
  }
}
//# sourceMappingURL=index.js.map