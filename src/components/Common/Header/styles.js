import {StyleSheet} from 'react-native';
import {FONT_SIZE_14, FONT_SIZE_16} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
  },

  menuBtn: {
    width: horizontalScale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtn: {
    width: horizontalScale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
    resizeMode: 'contain',
  },
  searchIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(25),
  },
  tabBarLink: {
    height: verticalScale(35),
    borderBottomWidth: horizontalScale(2),
    paddingBottom: verticalScale(5),
  },
  tabBarLinkLabel: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
