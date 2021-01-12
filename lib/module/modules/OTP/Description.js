import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Context } from '../../core/Context';
import { getDialCode } from '../../helpers';

function Description() {
  const {
    phoneNumber,
    countryCode
  } = useContext(Context);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.containerDescription
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.title, styles.textSpace]
  }, "Verification Number"), /*#__PURE__*/React.createElement(Text, {
    style: [styles.description, styles.textSpace]
  }, "We just sent a text to (+", getDialCode(countryCode), ") ", phoneNumber, ". We will not save or forward this number after the verification"), /*#__PURE__*/React.createElement(Text, {
    style: styles.description
  }, "Please enter the 4 digit code you received via SMS to", /*#__PURE__*/React.createElement(Text, {
    style: styles.phoneNumber
  }, " (+", getDialCode(countryCode), ") ", phoneNumber)));
}

export default Description;
//# sourceMappingURL=Description.js.map