import { postWebLogin } from '../network';
export const WEB_LOGIN_REQUEST = 'WEB_LOGIN_REQUEST';
export const WEB_LOGIN_CALLBACK = 'WEB_LOGIN_CALLBACK';
export const webLoginAction = {
  webLoginRequest: async (dispatch, params) => {
    dispatch({
      type: 'WEB_LOGIN_REQUEST'
    });
    const response = await postWebLogin(params);
    dispatch({
      type: 'WEB_LOGIN_CALLBACK',
      payload: response
    });
  }
};
//# sourceMappingURL=webLoginModel.js.map