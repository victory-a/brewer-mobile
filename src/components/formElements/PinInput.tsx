import React from 'react';
import { StyleSheet, KeyboardType } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

import { colors } from 'styles/theme';

interface Props {
  onChange: (value: string) => void;
  defaultValue?: string;
  inputCount?: number;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}

const PinInput = ({
  onChange,
  inputCount = 4,
  autoFocus = true,
  secureTextEntry = true,
  keyboardType = 'numeric',
  ...props
}: Props) => {
  return (
    <OTPTextView
      handleTextChange={onChange}
      inputCount={inputCount}
      autoFocus={autoFocus}
      tintColor={colors.primary}
      offTintColor={colors['white-color']}
      containerStyle={styles.containerStyle}
      textInputStyle={styles.textInputStyle}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

export default PinInput;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%'
  },
  textInputStyle: {
    backgroundColor: colors['sea-shell'],
    borderRadius: 8,
    color: colors.primary,
    fontSize: 16,
    height: 48,
    width: 48,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.primary
  }
});
