import React from 'react';
import { Text } from 'react-native';
import options from '../../core/options';
import styles from './styles';

function TermsOfService() {
  return /*#__PURE__*/React.createElement(Text, {
    style: styles.tosLabel,
    textBreakStrategy: "balanced"
  }, "I hereby agree to ".concat(options.appName, "'s Terms of Service"));
}

export default TermsOfService;
//# sourceMappingURL=TermsOfService.js.map