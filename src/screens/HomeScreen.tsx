import { SafeAreaView, View, Pressable, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { ContainerView } from 'src/components/shared/ContainerView';
import { Text } from 'src/components/shared/Text';
import { ArrowDown } from 'src/components/Icons';

const bg = require('../../assets/images/promo-bg.png');

const HomeScreen = () => {
  const { navigate } = useAppNavigation();
  return (
    <ScrollView>
      <SafeAreaView className="bg-coffee-brown">
        <ContainerView className="bg-coffee-brown pt-4 pb-[100px] relative">
          <Pressable hitSlop={5} onPress={() => navigate('Select-Location-Modal')}>
            <Text className="text-sm text-light-gray">Location</Text>
            <View className="flex-row items-center">
              <Text className="mr-1 font-semibold text-[#DDDDDD]">Utako, Abuja</Text>
              <ArrowDown />
            </View>
          </Pressable>
          <PromoBanner />
        </ContainerView>
      </SafeAreaView>
      <ContainerView></ContainerView>
    </ScrollView>
  );
};

export { HomeScreen };

function PromoBanner() {
  return (
    <Pressable className="w-full absolute -bottom-[60px] rounded-xl overflow-hidden">
      <ImageBackground source={bg} className="w-full h-[140px]">
        <View className="py-3 px-4">
          {/* pill */}
          <View className="flex-row">
            <View className="bg-red-ish px-[6px] py-1 rounded-lg w-fit">
              <Text className="text-white text-sm font-semibold">Promo</Text>
            </View>
          </View>

          <View
            className="mt-2 max-w-[70%] p-[6px]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Text className="text-white font-semibold text-3xl">Buy one get one FREE</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
