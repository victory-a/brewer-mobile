import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { ContainerView, SoftButton, Text, CartItem, SolidButton } from 'src/components';
import { formatCurrency } from 'src/utils/amount';

const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

export function OrderDetails() {
  return (
    <SafeAreaView className="bg-[#FDFDFD] flex-1 relative">
      {/* delivery info */}
      <ScrollView>
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
          <CartItem />
        </ContainerView>
      </ScrollView>

      {/* Payment summary */}
      <View className="shadow-2xl rounded-t-3xl py-8 bg-white absolute w-full bottom-1">
        <ContainerView>
          <Text className="text-secondary font-semibold text-base">Payment Summary</Text>
          <View className="flex-row justify-between items-center mt-4">
            <Text>Price</Text>
            <Text>{formatCurrency(4.53)}</Text>
          </View>
          <View className="flex-row justify-between items-center mt-4">
            <Text>Delivery Fee</Text>
            <View className="flex-row items-center space-x-2">
              <Text className="text-secondary text-sm font-normal line-through">
                {formatCurrency(2.9)}
              </Text>
              <Text className="text-secondary  font-semibold">{formatCurrency(1.0)}</Text>
            </View>
          </View>

          <View className="my-4 border-b border-whisper" />

          <View className="flex-row justify-between items-center mb-7">
            <Text>Total Payment</Text>
            <Text>{formatCurrency(5.53)}</Text>
          </View>

          <SolidButton>Make Payment 💸</SolidButton>
        </ContainerView>
      </View>
    </SafeAreaView>
  );
}

export default OrderDetails;
