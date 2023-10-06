import React from 'react';
import { View, TextInput as NativeTextInput, TextInputProps } from 'react-native';

import { colors } from 'src/styles/theme';
import { Text } from '../shared/Text';

interface ITextInput extends TextInputProps {
  label?: string;
}

export function TextInput({ label, ...props }: ITextInput) {
  return (
    <View className="mb-4">
      {label ? <Text className="mb-1 text-sm text-dark-lemon-green">{label}</Text> : null}
      <NativeTextInput
        {...props}
        className="px-3 py-4 font-Sora-regular text-[15px] text-mid-gray bg-sea-shell border-white-color rounded-[4px]"
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
        style={{
          borderWidth: 1
        }}
      />
    </View>
  );
}
