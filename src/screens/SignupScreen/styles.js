import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_16,
  FONT_SIZE_26,
  FONT_SIZE_14,
  FONT_SIZE_24,
  FONT_SIZE_12,
} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTxt: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_24,
  },
  loginSubTxt: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
  },
  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  signupForm: {
    marginTop: verticalScale(30),
    gap: verticalScale(15),
    width: '100%',
    paddingHorizontal: horizontalScale(20),
  },
  loginInput: {
    width: horizontalScale(280),
    height: verticalScale(60),
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  logo: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: 'contain',
    marginVertical: verticalScale(20),
  },
  eyeIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  passwordWrapper: {
    width: horizontalScale(320),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    width: horizontalScale(250),
    height: verticalScale(50),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    gap: horizontalScale(5),
  },
});
export default styles;
