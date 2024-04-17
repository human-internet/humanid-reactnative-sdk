/* eslint-disable prettier/prettier */
import xhr from './xhr';
import { EventRegister, ON_ERROR } from '../core/eventManager';

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

export async function postLoginOTP(params) {
  try {
    const response = await xhr('/users/login/request-otp', params);
    return { ...response
    };
  } catch (e) {
    EventRegister.emitEvent(ON_ERROR, catchErrorMessageRequestOTP(e));
    return defaultError(catchErrorMessageRequestOTP(e));
  }
}
export async function postLogin(params) {
  try {
    const response = await xhr('/users/login', params);
    return { ...response
    };
  } catch (e) {
    EventRegister.emitEvent(ON_ERROR, catchErrorMessage(e));
    return defaultError(catchErrorMessage(e));
  }
}
export async function postWebLogin(params) {
  try {
    const response = await xhr('/users/web-login', params);
    return { ...response
    };
  } catch (e) {
    EventRegister.emitEvent(ON_ERROR, catchErrorMessage(e));
    return defaultError(catchErrorMessage(e));
  }
}
//# sourceMappingURL=index.js.map