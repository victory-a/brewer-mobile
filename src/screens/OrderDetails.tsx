import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ContainerView, SoftButton, Text, CartItem, SolidButton, Divider } from 'src/components';
import { AppNavigatorParams } from 'src/model/navigation.model';
import { formatCurrency } from 'src/utils/amount';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useGetAnOrder } from 'src/lib/hooks/order.hooks';
import { FlashList } from '@shopify/flash-list';
import { useCart } from 'src/context/CartContext';

const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

export function OrderDetails() {
  const { navigate } = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams, 'Ongoing-Order-Details'>>();

  React.useLayoutEffect(() => {
    if (!params?.orderId) {
      navigate('Orders');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.orderId]);

  const { execute, isLoading } = useGetAnOrder();

  React.useEffect(() => {
    if (params?.orderId) {
      execute(params?.orderId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.orderId]);

  function handlePayment() {
    navigate('Order-Completed');
  }

  const { state } = useCart();

  return (
    <SafeAreaView className="relative flex-1 bg-[#FDFDFD]">
      {/* delivery info */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerView className="pt-5">
          <Text className="mb-1 text-base font-semibold text-secondary">Delivery Address</Text>

          <Text className="text-xs text-light-gray ">{state.order?.address}</Text>

          <View className="mt-4 flex-row">
            <SoftButton label="Edit Address" image={editIcon} additionalClassName="mr-3" />
            <SoftButton label="Add Note" image={documentIcon} />
          </View>

          <Divider additionalClassName="my-5" />

          <View className="mb-72 min-h-[2] ">
            <FlashList
              data={state.products}
              renderItem={({ index, item }) => (
                <CartItem
                  key={index}
                  {...{
                    index,
                    productID: item.productId,
                    size: item.size,
                    image: '',
                    name: item.name,
                    variant: item.variant,
                    quantity: item.quantity
                  }}
                />
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
