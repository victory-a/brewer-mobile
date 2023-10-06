import React from 'react';
import { View, TextInput as NativeTextInput, TextInputProps, Pressable } from 'react-native';
import { NGFlag } from '../../../assets/icons/NGFlag';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';

interface IPhoneInput extends TextInputProps {
  label?: string;
}
export function PhoneInput({ label, ...props }: IPhoneInput) {
  const phoneInputRef = React.useRef<NativeTextInput | null>(null);

  return (
    <Pressable className="w-full mb-4" onPress={() => phoneInputRef?.current?.focus()}>
      {label ? <Text className="mb-1 text-sm text-dark-lemon-green">{label}</Text> : null}
      <View
        className="w-full flex-row border-white-color bg-sea-shell rounded-[4px] pr-[0.5px] pl-2"
        style={{ borderWidth: 1, borderRightWidth: 1 }}
      >
        <View className="flex-row items-center">
          <NGFlag />
          <Text className="text-[15px] text-light-gray ml-1">+234</Text>
        </View>
        <NativeTextInput
          {...props}
          ref={phoneInputRef}
          className="px-1 py-4 font-Sora-regular text-[15px] text-mid-gray  bg-sea-shell rounded-[4px]"
          selectionColor={colors.primary}
          placeholderTextColor={colors['light-gray']}
        />
      </View>
    </Pressable>
  );
}
