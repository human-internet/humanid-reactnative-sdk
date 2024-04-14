import React, { useContext } from 'react';
import { View, ScrollView, Platform, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import OTP from '../OTP';
import Header from '../Header';
import Logo from './Logo';
import Description from './Description';
import TermsDescription from './TermsDescription';
import styles from './styles';
import { colors } from '../../themes';
import Form from './Form';
import { Context } from '../../core/Context';
import { EventRegister, ON_CANCEL } from '../../core/eventManager';

function Login() {
  const {
    loginVisible,
    clearState,
    resetReducer
  } = useContext(Context);

  const handleOnCancel = () => {
    EventRegister.emitEvent(ON_CANCEL, true);
    resetReducer();
    clearState();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    animationInTiming: 200,
    animationOutTiming: 200,
    animationOut: "fadeOut",
    animationIn: Platform.OS === 'ios' ? 'slideInRight' : 'slideInUp',
    propagateSwipe: true,
    swipeThreshold: 200,
    swipeDirection: ['right'],
    onSwipeComplete: handleOnCancel,
    isVisible: loginVisible,
    onBackButtonPress: handleOnCancel,
    backdropOpacity: 1,
    backdropColor: colors.white,
    style: styles.modal,
    coverScreen: true
  }, /*#__PURE__*/React.createElement(ScrollView, {
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled"
  }, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content"
  }), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Description, null), /*#__PURE__*/React.createElement(Form, null), /*#__PURE__*/React.createElement(TermsDescription, null)))), /*#__PURE__*/React.createElement(OTP, null)));
}

export default Login;
//# sourceMappingURL=index.js.map