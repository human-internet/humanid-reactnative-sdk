import React from 'react';
import { View } from 'react-native';
import AppName from './AppName';
import styles from './styles';
import options from '../../core/options';

function Logo() {
  const {
    Icon
  } = options;

  if (Icon === null) {
    return null;
  }

  return /*#__PURE__*/React.createElement(View, {
    style: styles.containerIconAppName
  }, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(AppName, null));
}

export default Logo;
//# sourceMappingURL=Logo.js.map