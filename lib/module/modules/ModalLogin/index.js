import React, { useContext } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';
import TermsOfService from './TermsOfService';
import styles from './styles';
import Logo from './Logo';
import { Context } from '../../core/Context';

function ModalLogin() {
  const {
    permissionVisible,
    setPermissionVisible,
    permissionIsContinue,
    setPermissionIsContinue,
    setLoginVisible
  } = useContext(Context);

  const hideSelf = () => {
    setPermissionVisible(false);
  };

  const handleContinue = () => {
    setPermissionIsContinue(true);
    hideSelf();
  };

  const handleWillHide = () => {
    if (permissionIsContinue) {
      setLoginVisible(true);
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    style: styles.modal,
    isVisible: permissionVisible,
    backdropOpacity: 0.3,
    onBackButtonPress: hideSelf,
    onBackdropPress: hideSelf,
    onModalHide: handleWillHide
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(Button, {
    onPress: handleContinue
  }), /*#__PURE__*/React.createElement(TermsOfService, null)));
}

export default ModalLogin;
//# sourceMappingURL=index.js.map