import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import Modal from 'react-native-modal';
import Logo from './Logo';
import styles from './styles';
import Description from './Description';
import Form from './Form';
import { Context } from '../../core/Context';

function OTP() {
  const {
    loginOTPVisible,
    setLoginOTPVisible
  } = useContext(Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    style: styles.modal,
    isVisible: loginOTPVisible,
    backdropOpacity: 0.3,
    onBackdropPress: hideSelf,
    onBackButtonPress: hideSelf
  }, /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
    style: styles.keyboardAvoid,
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(View, {
    style: styles.containerDescForm
  }, /*#__PURE__*/React.createElement(Description, null), /*#__PURE__*/React.createElement(Form, null)))));
}

export default OTP;
//# sourceMappingURL=index.js.map