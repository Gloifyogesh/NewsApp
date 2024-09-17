import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  bulletin: {
    width: horizontalScale(350),
    height: 'auto',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  bulletinLeft: {
    gap: verticalScale(10),
    width: horizontalScale(240),
    marginLeft: horizontalScale(10),
  },
  bulletinHeading: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  bulletinLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinSource: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinSubLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinReadTime: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinRight: {
    width: horizontalScale(90),
  },
  moreIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  bulletinImg: {
    width: horizontalScale(80),
    height: verticalScale(80),
    resizeMode: 'cover',
    borderRadius: moderateScale(40),
  },
});

export default styles;
