import React from 'react';
import { View, TextInput as NativeTextInput, TextInputProps, Pressable } from 'react-native';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';
import { NGFlag } from '../Icons';

interface IPhoneInput extends TextInputProps {
  label?: string;
}
export function PhoneInput({ label, ...props }: IPhoneInput) {
  const phoneInputRef = React.useRef<NativeTextInput | null>(null);

  return (
    <Pressable className="mb-4" onPress={() => phoneInputRef?.current?.focus()}>
      {label ? <Text className="mb-1 text-sm text-dark-lemon-green">{label}</Text> : null}
      <View
        className="flex-row items-center rounded-[4px] border-white-color bg-sea-shell pl-2 pr-[0.5px]"
        style={{ borderWidth: 1, borderRightWidth: 1 }}
      >
        <View className="flex-row items-center space-x-1">
          <NGFlag />
          <Text className="opacity-50">+234</Text>
        </View>
        <NativeTextInput
          {...props}
          ref={phoneInputRef}
          className="rounded-[4px] bg-sea-shell px-1 py-4 font-Sora-regular  text-[15px] text-mid-gray"
          selectionColor={colors.primary}
          placeholderTextColor={colors['light-gray']}
          maxLength={10}
        />
      </View>
    </Pressable>
  );
}
