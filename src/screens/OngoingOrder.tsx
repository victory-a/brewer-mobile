import { SafeAreaView, ScrollView, View, RefreshControl } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { EmptyCart, OrderItem } from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useGetOrders } from 'src/lib/hooks/order.hooks';

import { colors } from 'src/styles/theme';

const OngoingOrder = () => {
  const { navigate } = useAppNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const { execute, isLoading, orders = [] } = useGetOrders('pending');

  React.useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    execute().finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {orders.length > 0 ? (
        <ScrollView
          className="mt-5 h-full px-2"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing || isLoading}
              onRefresh={onRefresh}
              tintColor={colors['white-color']}
            />
          }
        >
          <View className="min-h-[2]">
            <FlashList
              data={orders}
              renderItem={({ index, item }) => (
                <OrderItem
                  key={index}
                  order={item}
                  ctaLabel="View Order"
                  handlePress={() => navigate('Ongoing-Order-Details', { orderId: item.id })}
                />
              )}
              estimatedItemSize={20}
            />
          </View>
        </ScrollView>
      ) : (
        <EmptyCart headline="Waiting on your order" />
      )}
    </SafeAreaView>
  );
};

export { OngoingOrder };
