import React, { useContext } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import Modal from 'react-native-modal';
import Header from '../Header';
import styles from './styles';
import Description from './Description';
import Form from './Form';
import ModalLoading from './ModalLoading';
import { Context } from '../../core/Context';

function OTP() {
  const {
    loginOTPVisible,
    setLoginOTPVisible,
    state
  } = useContext(Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return /*#__PURE__*/React.createElement(Modal, {
    style: styles.modal,
    isVisible: loginOTPVisible,
    backdropOpacity: 0,
    animationIn: Platform.OS === 'ios' ? 'slideInRight' : 'slideInUp',
    onBackdropPress: hideSelf,
    onBackButtonPress: hideSelf,
    swipeThreshold: 200,
    swipeDirection: ['right'],
    onSwipeComplete: hideSelf,
    coverScreen: true
  }, /*#__PURE__*/React.createElement(ScrollView, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Description, null), /*#__PURE__*/React.createElement(Form, null)), /*#__PURE__*/React.createElement(ModalLoading, {
    visible: state.loginFetching
  })));
}

export default OTP;
//# sourceMappingURL=index.js.map