import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { images } from "../../themes";

function Description() {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.centerContent
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.iconLock,
    source: images.iconLock
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.desc
  }, "Your phone number is deleted after verification"));
}

export default Description;
//# sourceMappingURL=Description.js.map