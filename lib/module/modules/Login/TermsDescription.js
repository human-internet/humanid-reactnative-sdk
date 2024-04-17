import React from 'react';
import { Text, View, Linking, Image } from 'react-native';
import styles from './styles';
import { images } from '../../themes';

function TermDescription() {
  const openWeb = () => {
    Linking.openURL('https://human-id.org/#how-we-protect');
  };

  return /*#__PURE__*/React.createElement(View, {
    style: styles.containerTerms
  }, /*#__PURE__*/React.createElement(Image, {
    source: images.iconInfo,
    style: styles.iconInfo,
    resizeMode: "contain"
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.containerTermsText
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.termsText,
    onPress: openWeb
  }, "Learn more about our"), /*#__PURE__*/React.createElement(Text, {
    style: styles.termsText,
    onPress: openWeb
  }, "mission to restore privacy")));
}

export default TermDescription;
//# sourceMappingURL=TermsDescription.js.map