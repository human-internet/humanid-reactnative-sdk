import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { flags, images } from '../../../themes';
import SearchCountryInput from './SearchCountryInput';
import FlatListSeparator from './FlatListSeparator';
import CountryPickerEmpty from './CountryPickerEmpty';
import styles from '../styles';
import { Context } from '../../../core/Context';
import { getDialCode } from '../../../helpers';

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
  } = useContext(Context);
  const [visible, setVisible] = React.useState(false);
  const [countries, setCountries] = React.useState(arrCountry);

  const resetCountries = () => {
    setCountries(arrCountry);
  };

  const toggleModal = () => {
    setVisible(!visible);
  }; // @ts-ignore


  const handleOnSelected = React.useCallback(item => {
    toggleModal();
    onSelected(item);
  });
  const handleOnCountryChange = React.useCallback(country => {
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
    const imageSource = flags[item.iso2];
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      activeOpacity: 0.3,
      onPress: () => handleOnSelected(item)
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.itemFlag
    }, /*#__PURE__*/React.createElement(Image, {
      source: imageSource,
      style: styles.iconFlag,
      resizeMode: "contain"
    }), /*#__PURE__*/React.createElement(Text, {
      style: styles.countryText
    }, item.name), /*#__PURE__*/React.createElement(Text, {
      style: styles.countryCodeText
    }, `+${item.dialCode}`)));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TouchableOpacity, {
    activeOpacity: 0.3,
    onPress: toggleModal
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.containerInputCountryCode
  }, /*#__PURE__*/React.createElement(Image, {
    source: flags[countryCode],
    resizeMode: "contain",
    style: styles.iconFlag
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.placeholderCountryCode
  }, `+${getDialCode(countryCode)}`), /*#__PURE__*/React.createElement(Image, {
    source: images.arrowDown,
    style: styles.arrowDown
  }))), /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    hideModalContentWhileAnimating: true,
    isVisible: visible,
    coverScreen: true,
    style: styles.modalCountryPicker,
    onModalHide: resetCountries,
    onModalShow: onCountryPickerShow,
    onBackButtonPress: toggleModal
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(SearchCountryInput, {
    onChangeText: handleOnCountryChange,
    onCancel: toggleModal
  }), /*#__PURE__*/React.createElement(FlatList, {
    keyExtractor: keyExtractor,
    data: countries,
    renderItem: renderItem,
    scrollEnabled: true,
    showsVerticalScrollIndicator: false,
    maxToRenderPerBatch: 15,
    ItemSeparatorComponent: FlatListSeparator,
    ListEmptyComponent: CountryPickerEmpty,
    keyboardShouldPersistTaps: "handled"
  }))));
}

export default /*#__PURE__*/React.memo(Index);
//# sourceMappingURL=index.js.map