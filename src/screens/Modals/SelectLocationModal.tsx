import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { SearchInput } from 'src/components/formElements/SearchInput';

export default function SelectLocationModal() {
  return (
    <SafeAreaView>
      <Text>SelectLocationModal</Text>
      <SearchInput />
    </SafeAreaView>
  );
}
