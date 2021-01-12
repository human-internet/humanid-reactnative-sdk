import { postLogin } from '../network';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_CALLBACK = 'LOGIN_CALLBACK';
export const loginAction = {
  loginRequest: async (dispatch, params) => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    const response = await postLogin(params);
    dispatch({
      type: 'LOGIN_CALLBACK',
      payload: response
    });
  }
};
//# sourceMappingURL=loginModel.js.map