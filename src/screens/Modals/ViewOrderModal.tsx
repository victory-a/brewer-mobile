import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { SearchInput } from 'src/components/formElements/SearchInput';

export default function ViewOrderModal() {
  return (
    <SafeAreaView>
      <Text>ViewOrderModal</Text>
      <SearchInput />
    </SafeAreaView>
  );
}
