import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../themes';
import styles from './styles';

function Header() {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(Image, {
    resizeMode: "contain",
    style: styles.logo,
    source: images.logoWhite
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, "Anonymous Login with"), /*#__PURE__*/React.createElement(Image, {
    resizeMode: "cover",
    style: styles.logoText,
    source: images.logoTextWhite
  }));
}

export default Header;
//# sourceMappingURL=index.js.map