"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _themes = require("../../../themes");

var _SearchCountryInput = _interopRequireDefault(require("./SearchCountryInput"));

var _FlatListSeparator = _interopRequireDefault(require("./FlatListSeparator"));

var _CountryPickerEmpty = _interopRequireDefault(require("./CountryPickerEmpty"));

var _styles = _interopRequireDefault(require("../styles"));

var _Context = require("../../../core/Context");

var _helpers = require("../../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const countries = require('../../../../assets/json/countries.json');

const arrCountry = Object.keys(countries).map(key => {
  return countries[key];
});

function Index(props) {
  const {
    onSelected,
    onCountryPickerShow
  } = props;
  const {
    countryCode
  } = (0, _react.useContext)(_Context.Context);

  const [visible, setVisible] = _react.default.useState(false);

  const [countries, setCountries] = _react.default.useState(arrCountry);

  const resetCountries = () => {
    setCountries(arrCountry);
  };

  const toggleModal = () => {
    setVisible(!visible);
  }; // @ts-ignore


  const handleOnSelected = _react.default.useCallback(item => {
    toggleModal();
    onSelected(item);
  });

  const handleOnCountryChange = _react.default.useCallback(country => {
    if (!country.length) {
      setCountries(arrCountry);
    } else {
      const filterCountries = countries.filter(filtered => filtered.name.includes(country));
      setCountries(filterCountries);
    }
  }, []);

  const keyExtractor = item => item.name;

  const renderItem = _ref => {
    let {
      item
    } = _ref;
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
    }, `+${item.dialCode}`)));
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
  }, `+${(0, _helpers.getDialCode)(countryCode)}`), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _themes.images.arrowDown,
    style: _styles.default.arrowDown
  }))), /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    hideModalContentWhileAnimating: true,
    isVisible: visible,
    coverScreen: true,
    style: _styles.default.modalCountryPicker,
    onModalHide: resetCountries,
    onModalShow: onCountryPickerShow,
    onBackButtonPress: toggleModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_SearchCountryInput.default, {
    onChangeText: handleOnCountryChange,
    onCancel: toggleModal
  }), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    keyExtractor: keyExtractor,
    data: countries,
    renderItem: renderItem,
    scrollEnabled: true,
    showsVerticalScrollIndicator: false,
    maxToRenderPerBatch: 15,
    ItemSeparatorComponent: _FlatListSeparator.default,
    ListEmptyComponent: _CountryPickerEmpty.default,
    keyboardShouldPersistTaps: "handled"
  }))));
}

var _default = /*#__PURE__*/_react.default.memo(Index);

exports.default = _default;
//# sourceMappingURL=index.js.map