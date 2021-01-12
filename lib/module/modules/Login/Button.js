import React, { useContext } from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { colors } from '../../themes';
import { Context } from '../../core/Context';

function Button(props) {
  const {
    enabled,
    onPress
  } = props;
  const {
    state
  } = useContext(Context);
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.btnContainer, enabled ? styles.btnEnter : styles.btnEnterDisabled],
    disabled: !enabled,
    onPress: onPress
  }, state.loginOTPFetching ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "small",
    color: colors.black
  }) : /*#__PURE__*/React.createElement(Text, {
    style: styles.btnEnterText
  }, "Enter"));
}

export default Button;
//# sourceMappingURL=Button.js.map