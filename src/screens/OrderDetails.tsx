import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { ContainerView, SoftButton, Text, CartItem, SolidButton, Divider } from 'src/components';

import { formatCurrency } from 'src/utils/amount';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

export function OrderDetails() {
  const { navigate } = useAppNavigation();

  function handlePayment() {
    navigate('Order-Completed');
  }

  return (
    <SafeAreaView className="relative flex-1 bg-[#FDFDFD]">
      {/* delivery info */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerView className="pt-5">
          <Text className="mb-4 text-base font-semibold text-secondary">Delivery Address</Text>

          <Text className="mb-1 text-sm font-semibold text-mid-gray">Jl. Kpg Sutoyo</Text>
          <Text className="text-xs text-light-gray ">
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>

          <View className="mt-4 flex-row">
            <SoftButton label="Edit Address" image={editIcon} additionalClassName="mr-3" />
            <SoftButton label="Add Note" image={documentIcon} />
          </View>

          <Divider additionalClassName="my-5" />

          <CartItem />
          <CartItem />
        </ContainerView>
      </ScrollView>

      {/* Payment summary */}
      <View className="absolute bottom-1 w-full rounded-t-3xl bg-white py-8 shadow-2xl">
        <ContainerView>
          <Text className="text-base font-semibold text-secondary">Payment Summary</Text>
          <View className="mt-4 flex-row items-center justify-between">
            <Text>Price</Text>
            <Text>{formatCurrency(4.53)}</Text>
          </View>
          <View className="mt-4 flex-row items-center justify-between">
            <Text>Delivery Fee</Text>
            <View className="flex-row items-center space-x-2">
              <Text className="text-sm font-normal text-secondary line-through">
                {formatCurrency(2.9)}
              </Text>
              <Text className="font-semibold  text-secondary">{formatCurrency(1.0)}</Text>
            </View>
          </View>

          <Divider />

          <View className="mb-7 flex-row items-center justify-between">
            <Text>Total Payment</Text>
            <Text>{formatCurrency(5.53)}</Text>
          </View>

          <SolidButton onPress={handlePayment}>Make Payment 💸</SolidButton>
        </ContainerView>
      </View>
    </SafeAreaView>
  );
}

export default OrderDetails;
