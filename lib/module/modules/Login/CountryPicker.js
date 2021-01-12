import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { flags, images } from '../../themes';
import styles from './styles';
import { Context } from '../../core/Context';
import FlatListSeparator from './FlatListSeparator';
import { getDialCode } from '../../helpers';

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
  } = useContext(Context);
  const [visible, setVisible] = React.useState(false);

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
    }, "+".concat(item.dialCode))));
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
  }, "+".concat(getDialCode(countryCode))), /*#__PURE__*/React.createElement(Image, {
    source: images.arrowDown,
    style: styles.arrowDown
  }))), visible && /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    isVisible: visible,
    backdropOpacity: 0.5
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.containerModal
  }, /*#__PURE__*/React.createElement(FlatList, {
    keyExtractor: keyExtractor,
    data: arrCountry,
    renderItem: renderItem,
    scrollEnabled: true,
    showsVerticalScrollIndicator: false,
    maxToRenderPerBatch: 15,
    ItemSeparatorComponent: FlatListSeparator
  })), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TouchableOpacity, {
    activeOpacity: 0.3,
    onPress: toggleModal
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.btnCancelCountryPicker
  }, "Cancel"))))));
}

export default CountryPicker;
//# sourceMappingURL=CountryPicker.js.map