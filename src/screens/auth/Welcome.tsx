import React from 'react';
import { ImageBackground, View, Text, SafeAreaView } from 'react-native';
import { SolidButton } from 'src/components/formElements/Button';

const bg = require('../../../assets/images/coffee-bg.png');

const Welcome = () => {
  return (
    <View className="flex-1 bg-black">
      <ImageBackground source={bg} className="flex-[3] bg-black opacity-70" />

      <View className="flex-[2] w-full mx-auto">
        <View className="flex-[2] w-full max-w-[280px] mx-auto">
          <Text className="text-white font-Sora-regular text-center text-[30px] w-full mt-7">
            Coffee so good, your taste buds will love it.
          </Text>
          <Text className="mt-2 text-dark-grey text-center">
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>

        <SafeAreaView className="items-center w-full mt-auto">
          <SolidButton>Get Started</SolidButton>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Welcome;
