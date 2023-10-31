import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { colors } from 'src/styles/theme';

const SearchInput = (props: TextInputProps) => {
  return (
    <View className="rounded-md border border-white-color bg-sea-shell pr-1">
      <TextInput
        {...props}
        className="rounded-lg border-transparent bg-transparent px-2 py-[14] font-Sora-regular text-[15px] text-mid-gray"
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
      />
    </View>
  );
};

export { SearchInput };
