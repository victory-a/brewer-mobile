import React from 'react';
import { View, Image } from 'react-native';

import { Text } from './shared/Text';
import { TextButton } from './formElements/Button';

const coffeebg1 = require('../../assets/images/coffee-1.png');

export function CartItem() {
  return (
    <View className="flex-row justify-between items-center">
      <Image source={coffeebg1} className="h-[54] w-[54] rounded-2xl" />

      <View>
        <Text>Cappucino</Text>
        <Text>with Chocolate</Text>
      </View>

      <View className="flex-row justify-between items-center space-x-3">
        <TextButton
          className="h-[28] w-[28] bg-white rounded-full border border-whisper items-center justify-center"
          labelClassName="text-secondary font-semibold text-lg"
        >
          -
        </TextButton>
        <Text>1</Text>
        <TextButton
          className="h-[28] w-[28] bg-white rounded-full border border-whisper flex-row items-center justify-center"
          labelClassName="text-primary font-semibold text-xl"
        >
          +
        </TextButton>
      </View>
    </View>
  );
}
