import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';

import { useAuthNavigation } from 'src/hooks/useTypedNavigation';
import { SolidButton, Text } from 'src/components';

const bg = require('../../../assets/images/coffee-bg.png');

export const Welcome = () => {
  const { navigate } = useAuthNavigation();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground source={bg} className="flex-[3] bg-black opacity-70" />

      <View className="mx-auto w-full flex-[2]">
        <View className="mx-auto w-full max-w-[280px] flex-[2]">
          <Text className="mt-7 w-full text-center text-[30px] leading-[30.6px] text-white">
            Coffee so good, your taste buds will love it.
          </Text>
          <Text className="mt-2 text-center text-base text-dark-gray">
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>

        <SafeAreaView className="mx-auto mt-auto w-[85%] items-center">
          <View className="mb-1 w-full">
            <SolidButton onPress={() => navigate('Register')}>Get Started</SolidButton>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
