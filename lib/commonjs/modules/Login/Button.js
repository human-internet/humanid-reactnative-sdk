"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

var _themes = require("../../themes");

var _Context = require("../../core/Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Button(props) {
  const {
    enabled,
    onPress
  } = props;
  const {
    state
  } = (0, _react.useContext)(_Context.Context);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [_styles.default.btnContainer, enabled ? _styles.default.btnEnter : _styles.default.btnEnterDisabled],
    disabled: !enabled,
    onPress: onPress
  }, state.loginOTPFetching ? /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: _themes.colors.white
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: enabled ? _styles.default.btnEnterText : _styles.default.btnEnterTextDisabled
  }, "Enter"));
}

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map