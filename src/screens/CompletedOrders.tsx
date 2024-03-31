import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';

import { EmptyCart, LoadingSpinner, OrderItem } from 'src/components';
import { useGetOrders } from 'src/lib/hooks/order.hooks';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { colors } from 'src/styles/theme';

export function CompletedOrders() {
  const { navigate } = useAppNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const { execute, isLoading, orders = [] } = useGetOrders('completed');

  useFocusEffect(
    React.useCallback(() => {
      execute();
    }, [])
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    execute().finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {orders.length > 0 ? (
        <ScrollView
          className="mt-5 px-2"
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
                  ctaLabel="View Timeline"
                  handlePress={() => navigate('Completed-Order-Details', { orderId: item.id })}
                />
              )}
              estimatedItemSize={20}
            />
          </View>
        </ScrollView>
      ) : (
        <EmptyCart headline="We are waiting for your first order" />
      )}
    </SafeAreaView>
  );
}
