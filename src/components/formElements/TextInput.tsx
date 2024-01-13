import React from 'react';
import { View, TextInput as NativeTextInput, TextInputProps } from 'react-native';

import useFocus from './useFocus';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';

interface ITextInput extends TextInputProps {
  label?: string;
}

export function TextInput({ label, ...props }: ITextInput) {
  const { isFocused, handleFocus, handleBlur } = useFocus();

  return (
    <View className="mb-4">
      {label ? <Text className="mb-1 text-sm text-dark-lemon-green">{label}</Text> : null}
      <NativeTextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`rounded-[4px] border-[1px] ${
          isFocused ? 'border-primary' : 'border-white-color'
        } bg-sea-shell px-3 py-4 font-Sora-regular text-[15px] text-mid-gray`}
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
      />
    </View>
  );
}
