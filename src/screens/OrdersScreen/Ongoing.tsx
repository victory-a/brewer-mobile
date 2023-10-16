import { SafeAreaView, Image, View } from 'react-native';
import React from 'react';
import { ContainerView } from 'src/components/shared/ContainerView';
import { Text } from 'src/components/shared/Text';
import { SolidButton } from 'src/components/formElements/Button';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const emptyCart = require('../../../assets/images/empty-cart.png');
const cartItems = [];

const Ongoing = () => {
  const { navigate } = useAppNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <ContainerView className="flex-1 items-center justify-center">
        <Image source={emptyCart} />
        <Text className="text-secondary text-base mt-2">Your Cart is Empty</Text>
        <View className="mt-10 w-full max-w-[275]">
          <SolidButton onPress={() => navigate('Home')}>Place an Order</SolidButton>
        </View>
      </ContainerView>
    </SafeAreaView>
  );
};

export { Ongoing };
