import React from 'react';
import { View } from 'react-native';

import { Pressable } from './shared/Pressable';
import { Text } from './shared/Text';
import { ArrowDown } from './Icons';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

export function SelectLocation() {
  const { navigate } = useAppNavigation();

  return (
    <Pressable hitSlop={5} onPress={() => navigate('Select-Location-Modal')}>
      <Text className="text-sm text-light-gray">Location</Text>
      <View className="flex-row items-center">
        <Text className="mr-1 font-semibold text-[#DDDDDD]">Utako, Abuja</Text>
        <ArrowDown />
      </View>
    </Pressable>
  );
}
