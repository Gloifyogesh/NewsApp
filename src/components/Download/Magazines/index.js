import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../Common';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const PlaceholderComponent = ({colors, t}) => {
  return (
    <View style={styles.contentContainer}>
      <Image source={ICONS.MAGAZINE} style={styles.icon} />
      <Text style={styles.placeholderText}>
        {t('components.magazines.text.placeholder_text')}
      </Text>

      <Button
        text={t('components.magazines.text.btn.explore_magazines')}
        bgColor={colors.btnBackground}
        variant="elevated"
        width={horizontalScale(220)}
        height={verticalScale(55)}
        borderRadius={moderateScale(30)}
      />
    </View>
  );
};

const Magazines = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  return <PlaceholderComponent colors={colors} t={t} />;
};

export default Magazines;
