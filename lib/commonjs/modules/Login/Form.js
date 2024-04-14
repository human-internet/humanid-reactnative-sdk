"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CountryPicker = _interopRequireDefault(require("./CountryPicker"));

var _Button = _interopRequireDefault(require("./Button"));

var _styles = _interopRequireDefault(require("./styles"));

var _themes = require("../../themes");

var _Context = require("../../core/Context");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Form() {
  const {
    state,
    phoneNumber,
    setPhoneNumber,
    setLoginOTPVisible,
    loginVisible,
    setCountryCode,
    countryCode,
    loginOTPRequest
  } = (0, _react.useContext)(_Context.Context);
  const inputRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    /**
     * Focus keyboard when mounting
     */
    focusPhoneNumber();
    return () => {
      _reactNative.Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);
  (0, _react.useEffect)(() => {
    var _state$loginOTPPayloa;

    if ((_state$loginOTPPayloa = state.loginOTPPayload) !== null && _state$loginOTPPayloa !== void 0 && _state$loginOTPPayloa.success) {
      setLoginOTPVisible(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [state.loginOTPPayload]);

  _react.default.useEffect(() => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.setNativeProps({
      style: phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.length ? _styles.default.phoneOnTyping : _styles.default.placeholder
    });
  }, [phoneNumber]);

  const focusPhoneNumber = () => {
    if (loginVisible) {
      _reactNative.InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
          var _inputRef$current2;

          return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
        }, 100);
      });
    }
  };

  const keyboardDidHide = () => {
    if (loginVisible) {
      var _inputRef$current3;

      (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.blur();
    }
  };

  const handleChangeText = text => {
    if (isNaN(Number(text))) {
      return;
    }

    setPhoneNumber(text);
  };

  const handleCountrySelected = item => {
    setTimeout(() => {
      _reactNative.Keyboard.dismiss();
    }, 0);
    setTimeout(() => {
      setCountryCode(item.iso2);
      focusPhoneNumber();
    }, 100);
  };

  const handleSubmit = () => {
    _reactNative.Keyboard.dismiss();

    loginOTPRequest({
      phone: phoneNumber,
      countryCode: (0, _helpers.getDialCode)(countryCode)
    });
  };

  const isSubmitEnabled = () => {
    if (phoneNumber.length >= 9) {
      const phoneNumberLib = require('google-libphonenumber');

      const phoneUtil = phoneNumberLib.PhoneNumberUtil.getInstance();
      const currentCountry = (0, _helpers.getCountry)(countryCode);
      const iso2 = currentCountry === null || currentCountry === void 0 ? void 0 : currentCountry.iso2;
      const phoneInfo = phoneUtil.parse(phoneNumber, iso2);
      return phoneUtil.isValidNumber(phoneInfo);
    }

    return false;
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerForm
  }, /*#__PURE__*/_react.default.createElement(_CountryPicker.default, {
    onSelected: handleCountrySelected,
    onCountryPickerShow: keyboardDidHide
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    ref: inputRef,
    style: _styles.default.textInput,
    keyboardType: "phone-pad",
    onChangeText: handleChangeText,
    value: phoneNumber,
    placeholder: "Phone Number",
    maxLength: 15,
    selectionColor: _themes.colors.gray,
    placeholderTextColor: _themes.colors.placeholder
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    enabled: isSubmitEnabled(),
    onPress: handleSubmit
  }));
}

var _default = Form;
exports.default = _default;
//# sourceMappingURL=Form.js.map