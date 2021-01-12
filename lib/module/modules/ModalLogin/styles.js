import { StyleSheet, Dimensions } from 'react-native';
import { colors, globalStyles, metrics } from '../../themes';
import { RFValue } from '../../helpers';
const {
  height
} = Dimensions.get('window');
const percentage = height <= 640 ? 0.6 : 0.5;
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: metrics.screenWidth
  },
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: metrics.screenHeight * percentage,
    ...globalStyles.containerModal
  },
  containerIconAppName: {
    alignItems: 'center'
  },
  tosLabel: { ...globalStyles.description,
    color: colors.orange,
    marginVertical: 10,
    textAlign: 'center'
  },
  imgButton: {
    width: RFValue(60),
    height: RFValue(60),
    marginRight: 10
  },
  appName: { ...globalStyles.title,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 25
  },
  containerButton: {
    minHeight: 50,
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  containerLogoText: {
    flexDirection: 'column',
    marginRight: 5
  },
  subContainerLogoText: {
    flex: 1,
    paddingVertical: 5
  },
  sectionLogoText: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  continueWithText: { ...globalStyles.normal,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  privacyText: { ...globalStyles.description,
    flex: 1,
    marginTop: -5,
    color: colors.gray,
    alignSelf: 'center'
  },
  imgText: {
    flex: 1,
    height: RFValue(30),
    marginTop: RFValue(-3),
    marginLeft: 2.5,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
});
export default styles;
//# sourceMappingURL=styles.js.map