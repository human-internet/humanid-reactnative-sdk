"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var _rootState = _interopRequireDefault(require("../models/rootState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Context = /*#__PURE__*/_react.default.createContext({
  state: _rootState.default,
  loginRequest: () => {},
  loginOTPRequest: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  countryCode: 'us',
  setCountryCode: () => {},
  permissionVisible: false,
  setPermissionVisible: () => {},
  permissionIsContinue: false,
  setPermissionIsContinue: () => {},
  loginVisible: false,
  setLoginVisible: () => {},
  loginOTPVisible: false,
  setLoginOTPVisible: () => {},
  clearState: () => {},
  resetReducer: () => {}
});

exports.Context = Context;
//# sourceMappingURL=Context.js.map