import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import {
  ContainerView,
  SoftButton,
  Text,
  SolidButton,
  Divider,
  OrderDetailItem,
  LoadingSpinner
} from 'src/components';
import { AppNavigatorParams } from 'src/model/navigation.model';
import { formatCurrency } from 'src/utils';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useGetAnOrder, useUpdateOrder } from 'src/lib/hooks/order.hooks';
import { FlashList } from '@shopify/flash-list';

const documentIcon = require('../../assets/icon/document.png');
const editIcon = require('../../assets/icon/edit.png');

const deliveryPrice = 1.0;

export function OrderDetails() {
  const { navigate } = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams, 'Ongoing-Order-Details'>>();

  React.useLayoutEffect(() => {
    if (!params?.orderId) {
      navigate('Orders');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.orderId]);

  const { execute, order, isLoading: isLoadingOrder } = useGetAnOrder();

  React.useEffect(() => {
    if (params?.orderId) {
      execute(params?.orderId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.orderId]);

  const { execute: updateOrder, isLoading } = useUpdateOrder();
  const payload = {
    id: order?.id,
    status: 'completed'
  };
  function markAsCompleted() {
    updateOrder(payload);
  }

  if (isLoadingOrder) return <LoadingSpinner />;

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
              data={order?.products}
              renderItem={({ index, item }) => <OrderDetailItem key={index} product={item} />}
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
            <Text>{formatCurrency(Number(order?.totalPrice))}</Text>
          </View>
          <View className="mt-4 flex-row items-center justify-between">
            <Text>Delivery Fee</Text>
            <View className="flex-row items-center space-x-2">
              <Text className="text-sm font-normal text-secondary line-through">
                {formatCurrency(2.9)}
              </Text>
              <Text className="font-normal  text-secondary">{formatCurrency(deliveryPrice)}</Text>
            </View>
          </View>

          <Divider />

          <View className="mb-7 flex-row items-center justify-between">
            <Text>Grand Total</Text>
            <Text className="font-semibold">
              {formatCurrency(deliveryPrice + Number(order?.totalPrice))}
            </Text>
          </View>

          <SolidButton onPress={markAsCompleted} loading={isLoading}>
            {isLoading ? 'Processing...' : 'Mark As Completed'}
          </SolidButton>
        </ContainerView>
      </View>
    </SafeAreaView>
  );
}
