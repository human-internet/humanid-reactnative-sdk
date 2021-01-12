"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ModalLogin = _interopRequireDefault(require("./ModalLogin"));

var _Login = _interopRequireDefault(require("./Login"));

var _Context = require("../core/Context");

var _helpers = require("../helpers");

var _useGlobalState = _interopRequireDefault(require("../core/useGlobalState"));

var _rootReducer = _interopRequireDefault(require("../models/rootReducer"));

var _rootState = _interopRequireDefault(require("../models/rootState"));

var _loginModel = require("../models/loginModel");

var _loginOTPModel = require("../models/loginOTPModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MainComponent = (_props, ref) => {
  (0, _helpers.checkClient)();
  const [state, dispatch] = (0, _react.useReducer)(_rootReducer.default, _rootState.default);
  const {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    permissionVisible,
    setPermissionVisible,
    permissionIsContinue,
    setPermissionIsContinue,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    clearState
  } = (0, _useGlobalState.default)();

  const loginRequest = async params => {
    await _loginModel.loginAction.loginRequest(dispatch, params);
  };

  const loginOTPRequest = async params => {
    await _loginOTPModel.loginOTPAction.loginOTPRequest(dispatch, params);
  };

  const resetReducer = () => {
    dispatch({
      type: 'RESET'
    });
  };

  _react.default.useImperativeHandle(ref, () => ({
    logIn: () => setPermissionVisible(true)
  }));

  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: {
      state,
      loginRequest,
      loginOTPRequest,
      resetReducer,
      phoneNumber,
      setPhoneNumber,
      countryCode,
      setCountryCode,
      permissionVisible,
      setPermissionVisible,
      permissionIsContinue,
      setPermissionIsContinue,
      loginVisible,
      setLoginVisible,
      loginOTPVisible,
      setLoginOTPVisible,
      clearState
    }
  }, /*#__PURE__*/_react.default.createElement(_ModalLogin.default, null), /*#__PURE__*/_react.default.createElement(_Login.default, null));
};

var _default = /*#__PURE__*/_react.default.forwardRef(MainComponent);

exports.default = _default;
//# sourceMappingURL=MainComponent.js.map