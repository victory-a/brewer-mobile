import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StatusBar, ScrollView, View, StyleSheet } from 'react-native';

import { BackIcon, StarIcon } from 'src/components/Icons';
import { ContainerView } from 'src/components/shared/ContainerView';
import { Pressable } from 'src/components/shared/Pressable';
import { Text } from 'src/components/shared/Text';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { AppNavigatorParams } from 'src/model/navigation.model';

const coffeebg1 = require('../../assets/images/coffee-1.png');

const milk = require('../../assets/icon/milk.png');

export const ProductDetailScreen = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams>>();

  // React.useLayoutEffect(() => {
  //   if (!params?.product) {
  //     navigation.navigate('AppBottomTabs');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [params?.product]);

  const product = params?.product;

  // if (!product) return;

  return (
    <ScrollView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ContainerView className="">
          <Image
            source={product?.thumbnail ?? coffeebg1}
            className="w-full max-w-[315] h-[226] rounded-2xl bg-contain"
          />
          <Text className="text-secondary text-xl font-semibold mt-5">{product?.title}</Text>
          <Text className="text-nobel text-sm">{product?.type}</Text>

          <View className="flex-row mt-2 justify-between items-center ">
            <View className="flex-row">
              <StarIcon />
              <Text>
                4.8 <Text>(230)</Text>
              </Text>
            </View>

            <View className="bg-snow p-[10] rounded-2xl">
              <Image source={milk} />
            </View>
          </View>

          <View className="my-5 border-b border-[#EAEAEA]" />
          <Text className="text-base font-semibold text-secondary mb-2">Description</Text>
          <Text className="text-nobel text-sm leading-[1.02]">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee
            and 85ml of fresh milk.
          </Text>

          <Text className="text-base font-semibold text-secondary mt-5">Size</Text>
          <View></View>
        </ContainerView>
      </SafeAreaView>
    </ScrollView>
  );
};
