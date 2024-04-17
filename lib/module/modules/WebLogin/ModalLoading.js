import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../themes';
import styles from './styles';

function ModalLoading(props) {
  const {
    visible
  } = props;
  return /*#__PURE__*/React.createElement(Modal, {
    isVisible: visible,
    coverScreen: true,
    backdropOpacity: 0.5,
    animationIn: "fadeIn",
    animationOut: "fadeOut"
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.containerModalLoading
  }, /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "large",
    color: colors.black
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.textLoading
  }, "Loading...")));
}

export default ModalLoading;
//# sourceMappingURL=ModalLoading.js.map