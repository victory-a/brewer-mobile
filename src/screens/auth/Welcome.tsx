import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';

import { useAuthNavigation } from 'src/hooks/useTypedNavigation';
import { SolidButton } from 'src/components/formElements/Button';
import { Text } from 'src/components/shared/Text';

const bg = require('../../../assets/images/coffee-bg.png');

export const Welcome = () => {
  const { navigate } = useAuthNavigation();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground source={bg} className="flex-[3] bg-black opacity-70" />

      <View className="flex-[2] w-full mx-auto">
        <View className="flex-[2] w-full max-w-[280px] mx-auto">
          <Text className="text-center text-[30px] leading-[30.6px] w-full mt-7">
            Coffee so good, your taste buds will love it.
          </Text>
          <Text className="mt-2 text-base text-dark-grey text-center">
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>

        <SafeAreaView className="items-center w-[85%] mt-auto mx-auto">
          <SolidButton onPress={() => navigate('Login')}>Get Started</SolidButton>
        </SafeAreaView>
      </View>
    </View>
  );
};
