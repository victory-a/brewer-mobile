import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ContainerView, SoftButton, Text, CartItem, SolidButton, Divider } from 'src/components';
import { formatCurrency } from 'src/utils';
import { FlashList } from '@shopify/flash-list';
import { useCart } from 'src/context/CartContext';
import { useCreateOrder } from 'src/lib/hooks/order.hooks';

const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

export function CartDetails() {
  const { execute, isLoading } = useCreateOrder();

  function handlePayment() {
    const payload = {
      address: '123 Main St, City, Country',
      products: state.products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
        size: product.selectedSize
      }))
    };

    execute(payload);
  }

  const { state } = useCart();

  return (
    <SafeAreaView className="relative flex-1 bg-[#FDFDFD]">
      {/* delivery info */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerView className="pt-5">
          <Text className="mb-1 text-base font-semibold text-secondary">Delivery Address</Text>

          <Text className="text-xs text-light-gray ">12 Ezekiel close</Text>

          <View className="mt-4 flex-row">
            <SoftButton label="Edit Address" image={editIcon} additionalClassName="mr-3" />
            <SoftButton label="Add Note" image={documentIcon} />
          </View>

          <Divider additionalClassName="my-5" />

          <View className="mb-72 min-h-[2] ">
            <FlashList
              data={state.products}
              renderItem={({ index, item }) => (
                <CartItem key={index} index={index} product={item} />
              )}
              estimatedItemSize={20}
            />
          </View>
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
              <Text className="font-normal text-secondary">{formatCurrency(1.0)}</Text>
            </View>
          </View>

          <Divider />

          <View className="mb-7 flex-row items-center justify-between">
            <Text>Grand Total</Text>
            <Text className="font-semibold">{formatCurrency(5.53)}</Text>
          </View>

          <SolidButton onPress={handlePayment} loading={isLoading}>
            {isLoading ? 'Processing...' : 'Make Payment 💸'}
          </SolidButton>
        </ContainerView>
      </View>
    </SafeAreaView>
  );
}

export default CartDetails;
