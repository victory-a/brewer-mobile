import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import { StarIcon } from 'src/components/Icons';
import {
  SelectButton,
  SolidButton,
  TextButton,
  Text,
  ContainerView,
  Divider,
  Image
} from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { AppNavigatorParams } from 'src/model/navigation.model';
import { formatCurrency } from 'src/utils/amount';

const coffeebg1 = require('../../assets/images/coffee-1.png');

const milk = require('../../assets/icon/milk.png');

export const ProductDetailScreen = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams>>();

  React.useLayoutEffect(() => {
    if (!params?.product) {
      navigation.navigate('AppBottomTabs');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.product]);

  const product = params?.product;

  if (!product) return;

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />

        <ContainerView className="relative mb-40 mt-2">
          <Image
            defaultSource={(product?.thumbnail as number) ?? (coffeebg1 as number)}
            className="mx-auto mt-2 h-[226] w-full max-w-[315] rounded-2xl bg-contain"
            resizeMode="contain"
          />
          <Text className="mt-5 text-xl font-semibold text-secondary">{product?.title}</Text>
          <Text className="text-sm text-nobel">{product?.type}</Text>

          <View className="mt-2 flex-row items-center justify-between ">
            <View className="flex-row">
              <StarIcon />
              <Text>
                4.8 <Text>(230)</Text>
              </Text>
            </View>

            <Image defaultSource={milk} className="h-[20] w-[20]" resizeMode="contain" />
          </View>

          <Divider additionalClassName="my-5" />

          <Text className="mb-2 text-base font-semibold text-secondary">Description</Text>
          <Text className="text-sm leading-[1.02] text-nobel">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee
            and 85ml of fresh milk.
          </Text>

          <SelectSize />
        </ContainerView>
      </ScrollView>

      <TotalDisplay />
    </SafeAreaView>
  );
};

function TotalDisplay() {
  const [quantity, setQuantity] = React.useState(1);
  const total = 4.53;
  const { navigate } = useAppNavigation();

  function handleRemove() {
    if (quantity === 1) {
      navigate('AppBottomTabs');
      return;
    }
    setQuantity((curr) => (curr > 0 ? curr - 1 : curr));
  }

  function handleAdd() {
    setQuantity((curr) => curr + 1);
  }

  return (
    <View className="absolute bottom-3 w-full border-t-[0.3px] border-lighter-gray bg-white py-6">
      <ContainerView className="items-center">
        <View className="w-full flex-1 flex-row space-x-6">
          <View className="flex-[50%] flex-row items-center justify-between">
            <TextButton
              className="rounded-lg bg-[#F3F3F3] px-4 py-2"
              labelClassName="text-secondary font-semibold text-lg"
              onPress={handleRemove}
            >
              -
            </TextButton>
            <Text>{quantity}</Text>
            <TextButton
              className="rounded-lg bg-[#F3F3F3] px-4 py-2"
              labelClassName="text-primary font-semibold text-xl"
              onPress={handleAdd}
            >
              +
            </TextButton>
          </View>
          <View className="flex-[50%]">
            <SolidButton onPress={() => navigate('AppBottomTabs')}>
              Add {quantity > 0 ? formatCurrency(total * quantity) : 'to Cart '}
            </SolidButton>
          </View>
        </View>
      </ContainerView>
    </View>
  );
}

function SelectSize() {
  const [selectedSize, setSelectedSize] = React.useState('S');

  return (
    <>
      <Text className="mt-5 text-base font-semibold text-secondary">Size</Text>

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
    </>
  );
}
