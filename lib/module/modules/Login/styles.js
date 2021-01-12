import { StyleSheet, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { colors, globalStyles, metrics } from '../../themes';
import { RFValue } from '../../helpers';
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1
  },
  container: { ...globalStyles.container,
    flex: 1,
    height: metrics.screenHeight,
    alignItems: 'center',
    paddingHorizontal: 40
  },
  containerModal: {
    backgroundColor: colors.graySmooth,
    marginHorizontal: 15,
    height: metrics.screenHeight / 1.5,
    borderRadius: 6
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  illustration: {
    width: RFValue(120),
    height: RFValue(120),
    ...(isIphoneX() && {
      marginTop: 25
    })
  },
  desc: { ...globalStyles.normal,
    color: colors.white,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 10
  },
  termsText: { ...globalStyles.description,
    color: colors.white,
    textAlign: 'center'
  },
  learnMoreText: { ...globalStyles.descriptionBold,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 15,
    textDecorationLine: 'underline'
  },
  btnCancel: { ...globalStyles.title,
    color: colors.white
  },
  containerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(10),
    paddingHorizontal: 25
  },
  textInput: {
    width: '65%',
    height: '100%',
    marginHorizontal: 5,
    ...(Platform.OS === 'android' && {
      marginTop: -4.5
    }),
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    color: colors.white,
    ...globalStyles.title,
    textAlign: 'center'
  },
  btnContainer: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 5
  },
  btnEnter: {
    backgroundColor: colors.orange
  },
  btnEnterDisabled: {
    backgroundColor: colors.gray
  },
  btnEnterText: { ...globalStyles.title
  },
  centerContent: {
    justifyContent: 'center'
  },
  keyboardAvoid: {
    flex: 1
  },
  iconFlag: {
    width: 25,
    height: 25
  },
  countryText: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: '600'
  },
  countryCodeText: { ...globalStyles.normalBold,
    color: colors.gray
  },
  itemFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 15
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray400
  },
  placeholderCountryCode: { ...globalStyles.title,
    color: colors.white,
    marginLeft: 5
  },
  containerInputCountryCode: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    ...(Platform.OS === 'android' && {
      paddingBottom: 5
    })
  },
  btnCancelCountryPicker: {
    textAlign: 'center',
    backgroundColor: colors.graySmooth,
    borderRadius: 6,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 25,
    ...globalStyles.title
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 5
  }
});
export default styles;
//# sourceMappingURL=styles.js.map