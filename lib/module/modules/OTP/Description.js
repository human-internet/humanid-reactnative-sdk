import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Context } from '../../core/Context';
import { formatPhoneInternational } from '../../helpers';

function Description() {
  const {
    phoneNumber,
    countryCode
  } = useContext(Context);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.containerDescription
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.title, styles.textSpace28]
  }, "Verify Your Phone Number"), /*#__PURE__*/React.createElement(Text, {
    style: styles.description
  }, "Please enter the 4-digit code you"), /*#__PURE__*/React.createElement(Text, {
    style: styles.description
  }, "received as SMS to"), /*#__PURE__*/React.createElement(Text, {
    style: [styles.phoneNumber, styles.textSpace21]
  }, formatPhoneInternational({
    country_code: countryCode,
    national_number: phoneNumber
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.descriptionBottom
  }, "After successful verification, your number will be"), /*#__PURE__*/React.createElement(Text, {
    style: styles.descriptionBottom
  }, "deleted permanently. Only a random identifier"), /*#__PURE__*/React.createElement(Text, {
    style: [styles.descriptionBottom]
  }, "will be stored."));
}

export default Description;
//# sourceMappingURL=Description.js.map