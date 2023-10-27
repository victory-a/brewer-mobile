import React from 'react';
import { View } from 'react-native';

import { Text } from './shared/Text';
import { TextButton } from './formElements/Button';
import { Image } from './shared/Image';

const coffeebg1 = require('../../assets/images/coffee-1.png');

export function CartItem() {
  return (
    <View className="mb-4 flex-row items-center justify-between">
      <View className="flex-row items-center space-x-3">
        <Image
          defaultSource={coffeebg1}
          className="h-[54] w-[54] rounded-2xl"
          resizeMode="contain"
        />

        <View>
          <Text className="text-base font-semibold text-secondary">Cappucino</Text>
          <Text className="text-xs text-nobel">with Chocolate</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between space-x-4">
        <TextButton
          className="h-[33] w-[33] items-center justify-center rounded-full border border-whisper bg-white align-middle"
          labelClassName="text-secondary font-semibold text-lg"
        >
          -
        </TextButton>
        <Text>1</Text>
        <TextButton
          className="h-[33] w-[33] flex-row items-center justify-center rounded-full border border-whisper bg-white align-middle"
          labelClassName="text-primary font-semibold text-xl"
        >
          +
        </TextButton>
      </View>
    </View>
  );
}
