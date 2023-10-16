import { SafeAreaView, Image, View } from 'react-native';
import React from 'react';
import { ContainerView } from 'src/components/shared/ContainerView';
import { Text } from 'src/components/shared/Text';
import { SolidButton } from 'src/components/formElements/Button';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const emptyCart = require('../../../assets/images/empty-cart.png');
const cartItems = [];

const Ongoing = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <ContainerView className="pt-2">
          <Text>Delivery Address</Text>
        </ContainerView>
      )}
    </SafeAreaView>
  );
};

export { Ongoing };

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
