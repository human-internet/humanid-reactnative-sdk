"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = require("../core/Context");

var _helpers = require("../helpers");

var _useGlobalState = _interopRequireDefault(require("../core/useGlobalState"));

var _rootReducer = _interopRequireDefault(require("../models/rootReducer"));

var _rootState = _interopRequireDefault(require("../models/rootState"));

var _loginModel = require("../models/loginModel");

var _loginOTPModel = require("../models/loginOTPModel");

var _webLoginModel = require("../models/webLoginModel");

var _WebLogin = _interopRequireDefault(require("./WebLogin"));

var _eventManager = require("../core/eventManager");

var _options = _interopRequireDefault(require("../core/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MainComponent = (_props, ref) => {
  (0, _helpers.checkClient)();
  const [state, dispatch] = (0, _react.useReducer)(_rootReducer.default, _rootState.default);
  const {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    webLoginUrl,
    setWebLoginUrlToView,
    webLoginModalVisible,
    setWebLoginModalVisible,
    clearState
  } = (0, _useGlobalState.default)();

  const loginRequest = async params => {
    await _loginModel.loginAction.loginRequest(dispatch, params);
  };

  const loginOTPRequest = async params => {
    await _loginOTPModel.loginOTPAction.loginOTPRequest(dispatch, params);
  };

  const webLoginRequest = async params => {
    await _webLoginModel.webLoginAction.webLoginRequest(dispatch, params);
  };

  const getWebLogin = async params => {
    try {
      setWebLoginModalVisible(true);
      let baseUrl = 'https://api.human-id.org/v1/';
      let endPointUrl = 'mobile/users/web-login';
      const response = await fetch(baseUrl + endPointUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'client-secret': _options.default.clientSecret,
          'client-id': _options.default.clientId
        },
        body: JSON.stringify(params)
      });
      const json = await response.json();

      if (json.data != null) {
        setWebLoginUrlToView(json.data.webLoginUrl);
      } else {
        setWebLoginModalVisible(false);
        console.error(json.message);

        _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, json.message);
      }
    } catch (error) {
      setWebLoginModalVisible(false);

      _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, 'Login Failed');
    }
  };

  const resetReducer = () => {
    dispatch({
      type: "RESET"
    });
  };

  _react.default.useImperativeHandle(ref, () => ({
    logIn: () => getWebLogin({
      lang: 'en'
    })
  }));

  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: {
      state,
      loginRequest,
      loginOTPRequest,
      webLoginRequest,
      resetReducer,
      phoneNumber,
      setPhoneNumber,
      countryCode,
      setCountryCode,
      loginVisible,
      setLoginVisible,
      loginOTPVisible,
      setLoginOTPVisible,
      webLoginModalVisible,
      setWebLoginModalVisible,
      webLoginUrl,
      setWebLoginUrlToView,
      clearState
    }
  }, /*#__PURE__*/_react.default.createElement(_WebLogin.default, null));
};

var _default = /*#__PURE__*/_react.default.forwardRef(MainComponent);

exports.default = _default;
//# sourceMappingURL=MainComponent.js.map