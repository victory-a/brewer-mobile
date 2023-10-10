import { SafeAreaView, View, Pressable, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { ContainerView } from 'src/components/shared/ContainerView';
import { Text } from 'src/components/shared/Text';
import { ArrowDown } from 'src/components/Icons';
import { CoffeeCard } from 'src/components/CoffeeCard';

const bg = require('../../assets/images/promo-bg.png');

const coffeebg1 = require('../../assets/images/coffee-1.png');
const coffeebg2 = require('../../assets/images/coffee-2.png');
const coffeebg3 = require('../../assets/images/coffee-3.png');
const coffeebg4 = require('../../assets/images/coffee-4.png');

const coffeeList = [
  { title: 'Cappucino', type: 'with Chocolate', thumbnail: coffeebg1, amount: 25 },
  { title: 'Cappucino', type: 'with Oat Milk', thumbnail: coffeebg2, amount: 25 },
  { title: 'Cappucino', type: 'with goat Milk', thumbnail: coffeebg3, amount: 25 },
  { title: 'Cappucino', type: 'with lamb Milk', thumbnail: coffeebg4, amount: 25 }
];

const HomeScreen = () => {
  return (
    <ScrollView bouncesZoom={false} bounces={false}>
      <SafeAreaView className="bg-coffee-brown">
        <ContainerView className="pt-4 pb-[100px] relative">
          <SelectLocation />
          <PromoBanner />
        </ContainerView>
      </SafeAreaView>

      <ContainerView className="flex-1 mt-[90px]">
        <View>
          {coffeeList.map((item, i) => (
            <CoffeeCard key={i} />
          ))}
        </View>
      </ContainerView>
    </ScrollView>
  );
};

export { HomeScreen };

function SelectLocation() {
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

function PromoBanner() {
  return (
    <Pressable className="w-full absolute -bottom-[70px] rounded-xl overflow-hidden">
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