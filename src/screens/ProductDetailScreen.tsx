import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StatusBar, ScrollView, View, StyleSheet } from 'react-native';

import { BackIcon, StarIcon } from 'src/components/Icons';
import { SelectButton, SolidButton, TextButton } from 'src/components/formElements/Button';
import { ContainerView } from 'src/components/shared/ContainerView';
import { Pressable } from 'src/components/shared/Pressable';
import { Text } from 'src/components/shared/Text';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { AppNavigatorParams } from 'src/model/navigation.model';
import { formatCurrency } from 'src/utils/amount';

const coffeebg1 = require('../../assets/images/coffee-1.png');

const milk = require('../../assets/icon/milk.png');

export const ProductDetailScreen = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams>>();

  const [selectedSize, setSelectedSize] = React.useState('S');

  // React.useLayoutEffect(() => {
  //   if (!params?.product) {
  //     navigation.navigate('AppBottomTabs');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [params?.product]);

  const product = params?.product;

  // if (!product) return;

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView className="bg-white">
        <StatusBar barStyle="dark-content" />
        <ContainerView className="">
          <Image
            source={product?.thumbnail ?? coffeebg1}
            className="w-full max-w-[315] h-[226] rounded-2xl bg-contain mx-auto"
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

          <View className="mt-3 flex-row justify-between">
            <SelectButton
              value="S"
              isSelected={selectedSize === 'S'}
              onPress={() => setSelectedSize('S')}
            />
            <SelectButton
              value="M"
              isSelected={selectedSize === 'M'}
              onPress={() => setSelectedSize('M')}
            />
            <SelectButton
              value="L"
              isSelected={selectedSize === 'L'}
              onPress={() => setSelectedSize('L')}
            />
          </View>
        </ContainerView>
      </ScrollView>
      <View className="absolute w-full bottom-3 py-6 bg-white border-t-[0.2px] border-lighter-gray">
        <ContainerView>
          <Text className="text-secondary mb-5">
            Total:
            <Text className="text-2xl font-semibold text-secondary"> {formatCurrency(153)}</Text>
          </Text>

          <View className="flex-row w-full flex-1 space-x-6">
            <View className="flex-row flex-[50%] items-center justify-between">
              <TextButton
                className="py-2 px-4 bg-[#F3F3F3] rounded-lg"
                labelClassName="text-secondary font-semibold text-lg"
              >
                -
              </TextButton>
              <Text>{1}</Text>
              <TextButton
                className="py-2 px-4 bg-[#F3F3F3] rounded-lg"
                labelClassName="text-primary font-semibold text-xl"
              >
                +
              </TextButton>
            </View>
            <View className="flex-[50%]">
              <SolidButton className="">Add to Cart</SolidButton>
            </View>
          </View>
        </ContainerView>
      </View>
    </SafeAreaView>
  );
};
