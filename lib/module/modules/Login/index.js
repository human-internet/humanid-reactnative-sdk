import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import OTP from '../OTP';
import Illustration from './Illustration';
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
    setLoginVisible,
    clearState,
    resetReducer
  } = useContext(Context);

  const hideSelf = () => {
    setLoginVisible(false);
  };

  const handleOnCancel = () => {
    EventRegister.emitEvent(ON_CANCEL, true);
    resetReducer();
    clearState();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationInTiming: 500,
    animationOut: "fadeOut",
    animationOutTiming: 500,
    isVisible: loginVisible,
    onBackButtonPress: hideSelf,
    backdropOpacity: 1,
    backdropColor: colors.primary,
    style: styles.modal,
    coverScreen: true
  }, /*#__PURE__*/React.createElement(ScrollView, {
    showsVerticalScrollIndicator: false
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Illustration, null), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Description, null), /*#__PURE__*/React.createElement(Form, null), /*#__PURE__*/React.createElement(TermsDescription, null), /*#__PURE__*/React.createElement(Text, {
    style: styles.btnCancel,
    onPress: handleOnCancel
  }, "Cancel")))), /*#__PURE__*/React.createElement(OTP, null)));
}

export default Login;
//# sourceMappingURL=index.js.map