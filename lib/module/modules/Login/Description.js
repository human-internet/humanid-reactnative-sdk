import React from 'react';
import { Text, View } from 'react-native';
import options from '../../core/options';
import styles from './styles';

function Description() {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.centerContent
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.desc, styles.textSpace]
  }, "HumanID confirms your phone number without sharing it with ", options.appName), /*#__PURE__*/React.createElement(Text, {
    style: [styles.desc, styles.textSpace]
  }, "Your data is permanently deleted after verification."));
}

export default Description;
//# sourceMappingURL=Description.js.map