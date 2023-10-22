import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { colors } from 'src/styles/theme';
import {} from '../Icons';

const SearchInput = (props: TextInputProps) => {
  return (
    <View className="rounded-md border border-white-color bg-[#F4F4F4]">
      <TextInput
        {...props}
        className="rounded-lg border-transparent bg-[#F4F4F4] px-2 py-[10px] font-Sora-regular text-[15px] text-mid-gray"
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
      />
    </View>
  );
};

export { SearchInput };
