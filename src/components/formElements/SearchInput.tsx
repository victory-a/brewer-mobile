import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import useFocus from './useFocus';

import { colors } from 'src/styles/theme';

const SearchInput = (props: TextInputProps) => {
  const { isFocused, handleFocus, handleBlur } = useFocus();

  return (
    <View
      className={`rounded-md border ${
        isFocused ? 'border-primary' : 'border-white-color'
      }  bg-sea-shell pr-1`}
    >
      <TextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="rounded-lg border-transparent bg-transparent px-2 py-[14] font-Sora-regular text-[15px] text-mid-gray"
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
      />
    </View>
  );
};

export { SearchInput };
