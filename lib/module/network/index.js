/* eslint-disable prettier/prettier */
import xhr from './xhr';
import { EventRegister, ON_ERROR } from '../core/eventManager';

const defaultError = e => ({
  success: false,
  code: 'FAILURE',
  message: "Something wrong while requesting network ".concat(e),
  data: null
});

const catchErrorMessage = e => {
  return (e === null || e === void 0 ? void 0 : e.message) || e;
};

export async function postLoginOTP(params) {
  try {
    const response = await xhr('/users/login/request-otp', params);
    return { ...response
    };
  } catch (e) {
    EventRegister.emitEvent(ON_ERROR, catchErrorMessage(e));
    return defaultError(catchErrorMessage(e));
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
//# sourceMappingURL=index.js.map