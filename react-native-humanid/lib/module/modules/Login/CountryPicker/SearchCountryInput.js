import React from 'react';
import { TextInput, View, Image, TouchableWithoutFeedback } from 'react-native';
import { images, colors } from '../../../themes';
import styles from '../styles';

function SearchCountryInput(props) {
  const {
    onChangeText,
    onCancel
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.containertxInputSearchCountry
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onCancel
  }, /*#__PURE__*/React.createElement(Image, {
    source: images.iconClose,
    style: styles.iconClose
  })), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Search Country",
    style: styles.txInputCountrySearch,
    onChangeText: onChangeText,
    placeholderTextColor: colors.placeholder
  }));
}

export default SearchCountryInput;
//# sourceMappingURL=SearchCountryInput.js.map