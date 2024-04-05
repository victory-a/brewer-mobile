import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppNavigatorParams } from 'src/model/navigation.model';

import {
  ContainerView,
  LoadingSpinner,
  SolidButton,
  Text,
  TextButton,
  TickIcon
} from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useGetAnOrder } from 'src/lib/hooks/order.hooks';
import { formatCurrency } from 'src/utils';
import { useCart } from 'src/context/CartContext';

export const OrderCompleted = () => {
  const { state } = useCart();
  const { params } = useRoute<RouteProp<AppNavigatorParams, 'Order-Completed'>>();

  const { navigate } = useAppNavigation();

  const { execute, order, isLoading: isLoadingOrder } = useGetAnOrder();

  React.useEffect(() => {
    if (params?.orderId) {
      execute(params?.orderId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.orderId]);

  if (isLoadingOrder) return <LoadingSpinner />;

  return (
    <SafeAreaView className="flex-1">
      <ContainerView className="mt-16 flex-1 items-center">
        <TickIcon />
        <Text className="mt-3 text-xl font-semibold text-secondary">Order Completed</Text>
        <Text className="text-center text-sm text-secondary ">
          Thank you for trusting us. {'\n'}We hope to see you again 😉
        </Text>

        <View className="mt-10 w-[200]">
          <Text className="text-center text-base font-semibold text-secondary">Summary</Text>
          <View className="mt-2 flex-row items-center justify-between">
            <Text>Price</Text>
            <Text>{formatCurrency(order?.totalPrice)}</Text>
          </View>
          <View className="mt-2 w-full flex-row items-center justify-between">
            <Text>Delivery </Text>
            <Text className="text-secondary">{formatCurrency(state.deliveryPrice)}</Text>
          </View>
          <View className="mt-2 w-full flex-row items-center justify-between">
            <Text className="font-semibold ">Total </Text>
            <Text className="font-semibold  text-secondary">
              {formatCurrency(state.deliveryPrice + Number(order?.totalPrice))}
            </Text>
          </View>
        </View>
        <View className="mb-2 mt-auto w-full">
          <SolidButton
            className="mb-5"
            onPress={() => navigate('Completed-Order-Details', { orderId: params.orderId })}
          >
            View Order
          </SolidButton>

          <TextButton
            onPress={() => navigate('Home')}
            className="bg-transparent"
            labelClassName="text-secondary"
            hitSlop={2}
          >
            Back Home
          </TextButton>
        </View>
      </ContainerView>
    </SafeAreaView>
  );
};
