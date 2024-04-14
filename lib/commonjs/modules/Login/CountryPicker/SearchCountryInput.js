"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _themes = require("../../../themes");

var _styles = _interopRequireDefault(require("../styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchCountryInput(props) {
  const {
    onChangeText,
    onCancel
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containertxInputSearchCountry
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onCancel
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.images.iconClose,
    style: _styles.default.iconClose
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Search Country",
    style: _styles.default.txInputCountrySearch,
    onChangeText: onChangeText,
    placeholderTextColor: _themes.colors.placeholder
  }));
}

var _default = SearchCountryInput;
exports.default = _default;
//# sourceMappingURL=SearchCountryInput.js.map