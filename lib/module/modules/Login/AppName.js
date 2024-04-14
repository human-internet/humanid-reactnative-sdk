import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function AppName() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.appNameBold,
    textBreakStrategy: "balanced"
  }, "HumanId will not receive any"), /*#__PURE__*/React.createElement(Text, {
    style: styles.appNameRegular,
    textBreakStrategy: "balanced"
  }, "of your personal information."));
}

export default AppName;
//# sourceMappingURL=AppName.js.map