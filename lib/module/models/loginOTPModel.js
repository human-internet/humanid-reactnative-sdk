import { postLoginOTP } from '../network';
export const LOGIN_OTP_REQUEST = 'LOGIN_OTP_REQUEST';
export const LOGIN_OTP_CALLBACK = 'LOGIN_OTP_CALLBACK';
export const loginOTPAction = {
  loginOTPRequest: async (dispatch, params) => {
    dispatch({
      type: 'LOGIN_OTP_REQUEST'
    });
    const response = await postLoginOTP(params);
    dispatch({
      type: 'LOGIN_OTP_CALLBACK',
      payload: response
    });
  }
};
//# sourceMappingURL=loginOTPModel.js.map