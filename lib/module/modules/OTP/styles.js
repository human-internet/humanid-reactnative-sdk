import { StyleSheet } from 'react-native';
import { colors, globalStyles, metrics } from '../../themes';
import { RFPercentage, RFValue } from '../../helpers';
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    width: metrics.screenWidth
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: RFValue(40),
    alignSelf: 'center',
    marginBottom: 25
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: colors.white,
    height: metrics.screenHeight * 0.65,
    ...globalStyles.containerModal
  },
  containerDescForm: {
    flex: 1
  },
  title: { ...globalStyles.title,
    textAlign: 'center'
  },
  description: { ...globalStyles.normal,
    textAlign: 'center'
  },
  phoneNumber: { ...globalStyles.normalBold,
    color: colors.primary,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 10
  },
  resendCode: { ...globalStyles.descriptionBold,
    color: colors.gray
  },
  containerDescription: {
    flex: 1,
    justifyContent: 'space-around'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  otpView: {
    width: RFPercentage(50),
    height: 50,
    paddingHorizontal: RFValue(20)
  },
  otpFieldStyle: {
    width: 65,
    height: 50,
    ...globalStyles.otpText,
    color: colors.black,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.gray
  },
  otpHighlightStyle: {
    borderBottomColor: colors.primary
  }
});
export default styles;
//# sourceMappingURL=styles.js.map