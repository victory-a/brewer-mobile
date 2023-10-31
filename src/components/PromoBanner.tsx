import React from 'react';
import { ImageBackground, View } from 'react-native';

import { Pressable } from './shared/Pressable';
import { Text } from './shared/Text';

const bg = require('../../assets/images/promo-bg.png');

export function PromoBanner() {
  return (
    <Pressable className="absolute -bottom-[80px] w-full overflow-hidden rounded-xl">
      <ImageBackground source={bg} className="w-full">
        <View className="px-4 py-3">
          {/* pill */}
          <View className="flex-row">
            <View className="w-fit rounded-lg bg-red-ish px-[6px] py-1">
              <Text className="text-sm font-semibold text-white">Promo</Text>
            </View>
          </View>

          <View
            className="mt-2 max-w-[70%] rounded-lg p-[6px] "
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Text className="text-3xl font-semibold text-white">Buy one get one FREE</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
