import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { images } from '../../themes';
import styles from './styles';

function Button(props) {
  const {
    onPress
  } = props;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.containerButton
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.imgButton,
    source: images.logoIcon
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.containerLogoText
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.subContainerLogoText
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.sectionLogoText
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.continueWithText
  }, "Continue with"), /*#__PURE__*/React.createElement(Image, {
    style: styles.imgText,
    source: images.logoText
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.privacyText
  }, "(recommended for full privacy)")))));
}

export default Button;
//# sourceMappingURL=Button.js.map