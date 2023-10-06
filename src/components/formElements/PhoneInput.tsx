import React from 'react';
import { View, TextInput as NativeTextInput, TextInputProps } from 'react-native';
import { NGFlag } from '../../../assets/icons/NGFlag';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';

interface IPhoneInput extends TextInputProps {
  label?: string;
}
export function PhoneInput({ label, ...props }: IPhoneInput) {
  return (
    <View className="mb-4">
      {label ? <Text className="mb-1 text-sm text-dark-lemon-green">{label}</Text> : null}
      <View
        className="flex-row items-center border-white-color bg-sea-shell rounded-[4px] pr-[0.5px] pl-2"
        style={{ borderWidth: 1, borderRightWidth: 1 }}
      >
        <View className="flex-row items-center">
          <NGFlag />
          <Text className="text-[15px] text-light-gray ml-1">+234</Text>
        </View>
        <NativeTextInput
          {...props}
          className="px-1 py-4 font-Sora-regular text-[15px] text-mid-gray  bg-sea-shell rounded-[4px]"
          selectionColor={colors.primary}
          placeholderTextColor={colors['light-gray']}
        />
      </View>
    </View>
  );
}
