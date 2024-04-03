import React from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';

import useFocus from './useFocus';

import { colors } from 'src/styles/theme';
import { CancelIcon, SearchIcon } from '../Icons';

const SearchInput = (props: TextInputProps & { onClear: () => void }) => {
  const { isFocused, handleFocus, handleBlur } = useFocus();
  const { onClear, ...rest } = props;
  return (
    <View
      className={`flex-row items-center rounded-md border ${
        isFocused ? 'border-primary' : 'border-white-color'
      }  bg-sea-shell pr-1`}
    >
      <View className="ml-2">
        <SearchIcon color={colors['dark-gray']} />
      </View>
      <TextInput
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="flex-1 rounded-lg border-transparent bg-transparent px-2 py-[14] font-Sora-regular text-[15px] text-mid-gray"
        selectionColor={colors.primary}
        placeholderTextColor={colors['light-gray']}
        autoCapitalize="none"
      />
      <Pressable className="ml-auto p-2" hitSlop={2} onPress={onClear}>
        <CancelIcon />
      </Pressable>
    </View>
  );
};

export { SearchInput };
