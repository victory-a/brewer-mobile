import React from 'react';
import { StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';
import { colors, fonts } from 'src/styles/theme';

interface ICheckBox {
  onClick: () => void;
  isChecked: boolean;
  leftText?: string;
  rightText?: string;
}

export function Checkbox({ onClick, isChecked, leftText, rightText }: ICheckBox) {
  return (
    <CheckBox
      onClick={onClick}
      isChecked={isChecked}
      leftText={leftText}
      rightText={rightText}
      rightTextStyle={styles.label}
      leftTextStyle={styles.label}
      checkBoxColor={colors.primary}
    />
  );
}

export default Checkbox;

const styles = StyleSheet.create({
  label: {
    color: colors['dark-lemon-green'],
    fontFamily: fonts.fontFamilyRegular,
    fontSize: 14
  }
});
