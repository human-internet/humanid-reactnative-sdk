"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OTPInputView extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "fields", []);

    _defineProperty(this, "keyboardDidHideListener", void 0);

    _defineProperty(this, "timer", void 0);

    _defineProperty(this, "bringUpKeyBoardIfNeeded", () => {
      const {
        autoFocusOnLoad,
        pinCount
      } = this.props;
      const digits = this.getDigits();
      const focusIndex = digits.length ? digits.length - 1 : 0;

      if (focusIndex < pinCount && autoFocusOnLoad) {
        this.focusField(focusIndex);
      }
    });

    _defineProperty(this, "getDigits", () => {
      const {
        digits: innerDigits
      } = this.state;
      return innerDigits;
    });

    _defineProperty(this, "handleKeyboardDidHide", () => {
      this.blurAllFields();
    });

    _defineProperty(this, "notifyCodeChanged", () => {
      const {
        digits
      } = this.state;
      const code = digits.join('');
      const {
        onCodeChanged
      } = this.props;

      if (onCodeChanged) {
        onCodeChanged(code);
      }
    });

    _defineProperty(this, "handleChangeText", (index, text) => {
      const {
        onCodeFilled,
        pinCount
      } = this.props;
      const digits = this.getDigits();
      let newdigits = digits.slice();
      const oldTextLength = newdigits[index] ? newdigits[index].length : 0;
      const newTextLength = text.length;

      if (newTextLength - oldTextLength === pinCount) {
        // user pasted text in.
        newdigits = text.split('').slice(oldTextLength, newTextLength);
        this.setState({
          digits: newdigits
        }, this.notifyCodeChanged);
      } else {
        if (text.length === 0) {
          if (newdigits.length > 0) {
            newdigits = newdigits.slice(0, newdigits.length - 1);
          }
        } else {
          text.split('').forEach(value => {
            if (index < pinCount) {
              newdigits[index] = value;
              index += 1;
            }
          });
          index -= 1;
        }

        this.setState({
          digits: newdigits
        }, this.notifyCodeChanged);
      }

      let result = newdigits.join('');

      if (result.length >= pinCount) {
        onCodeFilled && onCodeFilled(result);
        this.focusField(pinCount - 1);
        this.blurAllFields();
      } else {
        if (text.length > 0 && index < pinCount - 1) {
          this.focusField(index + 1);
        }
      }
    });

    _defineProperty(this, "handleKeyPressTextInput", (index, key) => {
      const digits = this.getDigits();

      if (key === 'Backspace') {
        if (!digits[index] && index > 0) {
          this.handleChangeText(index - 1, '');
          this.focusField(index - 1);
        }
      }
    });

    _defineProperty(this, "focusField", index => {
      if (index < this.fields.length) {
        this.fields[index].focus();
        this.setState({
          selectedIndex: index
        });
      }
    });

    _defineProperty(this, "blurAllFields", () => {
      this.fields.forEach(field => field.blur());
      this.setState({
        selectedIndex: -1
      });
    });

    _defineProperty(this, "clearAllFields", () => {
      const {
        clearInputs
      } = this.props;

      if (clearInputs) {
        this.setState({
          digits: [],
          selectedIndex: 0
        });
      }
    });

    _defineProperty(this, "renderOneInputField", (_, index) => {
      const {
        codeInputFieldStyle,
        codeInputHighlightStyle,
        secureTextEntry,
        editable,
        keyboardType,
        selectionColor,
        keyboardAppearance
      } = this.props;
      const {
        defaultTextFieldStyle
      } = _styles.default;
      const {
        digits
      } = this.state;
      const {
        clearInputs,
        placeholderCharacter,
        placeholderTextColor
      } = this.props;
      const {
        color: defaultPlaceholderTextColor
      } = { ...defaultTextFieldStyle,
        ...codeInputFieldStyle
      };
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        pointerEvents: "none",
        key: index + 'view',
        testID: "inputSlotView"
      }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
        testID: "textInput",
        underlineColorAndroid: "rgba(0,0,0,0)",
        style: [defaultTextFieldStyle, digits !== null && digits !== void 0 && digits[index] ? codeInputHighlightStyle : codeInputFieldStyle],
        ref: ref => {
          this.fields[index] = ref;
        },
        onChangeText: text => {
          this.handleChangeText(index, text);
        },
        onKeyPress: _ref => {
          let {
            nativeEvent: {
              key
            }
          } = _ref;
          this.handleKeyPressTextInput(index, key);
        },
        value: !clearInputs ? digits[index] : '',
        keyboardAppearance: keyboardAppearance,
        keyboardType: keyboardType,
        textContentType: "none",
        key: index,
        selectionColor: selectionColor,
        secureTextEntry: secureTextEntry,
        editable: editable,
        placeholder: placeholderCharacter,
        placeholderTextColor: placeholderTextColor || defaultPlaceholderTextColor
      }));
    });

    _defineProperty(this, "renderTextFields", () => {
      const {
        pinCount
      } = this.props;
      const array = new Array(pinCount).fill(0);
      return array.map(this.renderOneInputField);
    });

    this.state = {
      digits: [],
      selectedIndex: props.autoFocusOnLoad ? 0 : -1
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.bringUpKeyBoardIfNeeded();
    }, 300);
    this.keyboardDidHideListener = _reactNative.Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    var _this$keyboardDidHide;

    if (this.timer) {
      clearInterval(this.timer);
    }

    (_this$keyboardDidHide = this.keyboardDidHideListener) === null || _this$keyboardDidHide === void 0 ? void 0 : _this$keyboardDidHide.remove();
  }

  render() {
    const {
      pinCount,
      style,
      clearInputs
    } = this.props;
    const digits = this.getDigits();
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      testID: "OTPInputView",
      style: style
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
      style: _styles.default.touchable,
      onPress: () => {
        if (!clearInputs) {
          let filledPinCount = digits.filter(digit => {
            return digit !== null && digit !== undefined;
          }).length;
          this.focusField(Math.min(filledPinCount, pinCount - 1));
        } else {
          this.clearAllFields();
          this.focusField(0);
        }
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.default.containerTextField
    }, this.renderTextFields())));
  }

}

exports.default = OTPInputView;

_defineProperty(OTPInputView, "defaultProps", {
  pinCount: 6,
  autoFocusOnLoad: true,
  secureTextEntry: false,
  editable: true,
  keyboardAppearance: 'default',
  keyboardType: 'number-pad',
  clearInputs: false,
  placeholderCharacter: '',
  selectionColor: '#000'
});
//# sourceMappingURL=index.js.map