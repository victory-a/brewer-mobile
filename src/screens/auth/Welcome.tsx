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

      <View className="flex-[2] w-full mx-auto">
        <View className="flex-[2] w-full max-w-[280px] mx-auto">
          <Text className="text-white text-center text-[30px] leading-[30.6px] w-full mt-7">
            Coffee so good, your taste buds will love it.
          </Text>
          <Text className="mt-2 text-base text-dark-gray text-center">
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>

        <SafeAreaView className="items-center w-[85%] mt-auto mx-auto">
          <View className="w-full mb-1">
            <SolidButton onPress={() => navigate('Register')}>Get Started</SolidButton>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
