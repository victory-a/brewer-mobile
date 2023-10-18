import { SafeAreaView, View } from 'react-native';
import React from 'react';

import { ContainerView, EmptyCart, SoftButton, Text, CartItem } from 'src/components';

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

          <View className="my-5 border-b border-whisper" />

          <CartItem />
        </ContainerView>
      )}
    </SafeAreaView>
  );
};

export { OngoingOrder };
