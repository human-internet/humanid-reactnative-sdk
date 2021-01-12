import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from './styles';

function TermDescription() {
  const openWeb = () => {
    Linking.openURL('https://human-id.org/#how-we-protect');
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.termsText
  }, "humanID gives you back control over your privacy. The non profit organization authenticates you without sharing your data or retaning your data."), /*#__PURE__*/React.createElement(Text, {
    onPress: openWeb,
    style: [styles.learnMoreText, styles.textSpace]
  }, "Learn More"));
}

export default TermDescription;
//# sourceMappingURL=TermsDescription.js.map