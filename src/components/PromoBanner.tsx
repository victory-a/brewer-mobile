import React from 'react';
import { Pressable } from './shared/Pressable';
import { ImageBackground, View } from 'react-native';
import { Text } from './shared/Text';

const bg = require('../../assets/images/promo-bg.png');

export function PromoBanner() {
  return (
    <Pressable className="w-full absolute -bottom-[80px] rounded-xl overflow-hidden">
      <ImageBackground source={bg} className="w-full">
        <View className="py-3 px-4">
          {/* pill */}
          <View className="flex-row">
            <View className="bg-red-ish px-[6px] py-1 rounded-lg w-fit">
              <Text className="text-white text-sm font-semibold">Promo</Text>
            </View>
          </View>

          <View
            className="mt-2 max-w-[70%] p-[6px] rounded-lg "
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Text className="text-white font-semibold text-3xl">Buy one get one FREE</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
