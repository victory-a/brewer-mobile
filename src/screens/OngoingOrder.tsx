import { SafeAreaView, Image, View, ImageSourcePropType, PressableProps } from 'react-native';
import React from 'react';

import { ContainerView, SoftButton, SolidButton, Text, TextButton } from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const emptyCart = require('../../assets/images/empty-cart.png');
const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

const cartItems = [{}];

const OngoingOrder = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <ContainerView className="pt-5">
          <Text className="text-secondary text-base font-semibold mb-4">Delivery Address</Text>

          <Text className="mb-1 text-sm text-mid-gray font-semibold">Jl. Kpg Sutoyo</Text>
          <Text className="text-light-gray text-xs ">
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>

          <View className="mt-4 flex-row">
            <SoftButton label="Edit Address" image={editIcon} additionalClassName="mr-1" />
            <SoftButton label=" Add Note" image={documentIcon} />
          </View>
        </ContainerView>
      )}
    </SafeAreaView>
  );
};

export { OngoingOrder };

function EmptyCart() {
  const { navigate } = useAppNavigation();

  return (
    <ContainerView className="flex-1 items-center justify-center pt-2">
      <Image source={emptyCart} />
      <Text className="text-secondary text-base mt-2 text-center">Your cart is empty</Text>
      <View className="mt-12 w-full max-w-[275]">
        <SolidButton onPress={() => navigate('Home')}>Place an Order 👀</SolidButton>
      </View>
    </ContainerView>
  );
}
