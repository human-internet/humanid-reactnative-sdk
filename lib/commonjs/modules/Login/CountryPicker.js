"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _themes = require("../../themes");

var _styles = _interopRequireDefault(require("./styles"));

var _Context = require("../../core/Context");

var _FlatListSeparator = _interopRequireDefault(require("./FlatListSeparator"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const countries = require('../../../assets/json/countries.json');

const arrCountry = Object.keys(countries).map(key => {
  return countries[key];
});

function CountryPicker(props) {
  const {
    onSelected
  } = props;
  const {
    countryCode
  } = (0, _react.useContext)(_Context.Context);

  const [visible, setVisible] = _react.default.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleOnSelected = item => {
    toggleModal();
    onSelected(item);
  };

  const keyExtractor = item => item.iso2;

  const renderItem = ({
    item
  }) => {
    const imageSource = _themes.flags[item.iso2];
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      activeOpacity: 0.3,
      onPress: () => handleOnSelected(item)
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.default.itemFlag
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: imageSource,
      style: _styles.default.iconFlag,
      resizeMode: "contain"
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _styles.default.countryText
    }, item.name), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _styles.default.countryCodeText
    }, "+".concat(item.dialCode))));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 0.3,
    onPress: toggleModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerInputCountryCode
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.flags[countryCode],
    resizeMode: "contain",
    style: _styles.default.iconFlag
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.placeholderCountryCode
  }, "+".concat((0, _helpers.getDialCode)(countryCode))), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.images.arrowDown,
    style: _styles.default.arrowDown
  }))), visible && /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    isVisible: visible,
    backdropOpacity: 0.5
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.containerModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    keyExtractor: keyExtractor,
    data: arrCountry,
    renderItem: renderItem,
    scrollEnabled: true,
    showsVerticalScrollIndicator: false,
    maxToRenderPerBatch: 15,
    ItemSeparatorComponent: _FlatListSeparator.default
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 0.3,
    onPress: toggleModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.btnCancelCountryPicker
  }, "Cancel"))))));
}

var _default = CountryPicker;
exports.default = _default;
//# sourceMappingURL=CountryPicker.js.map