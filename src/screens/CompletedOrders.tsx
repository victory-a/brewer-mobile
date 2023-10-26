import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { ContainerView, EmptyCart } from 'src/components';
// import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { OrderItem } from 'src/components/OrderItem';
import { colors } from 'src/styles/theme';

const dummyOrder = {
  orderCode: '1255334',
  date: new Date()
};

const completedOrders = Array.from({ length: 5 }, () => dummyOrder);

export function CompletedOrders() {
  // const { navigate } = useAppNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <EmptyCart headline="We are waiting for your first order" />

      {/* {dummyOrder ? (
        <ScrollView
          className="mt-5 px-2"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors['white-color']}
            />
          }
        >
          <View className="min-h-[2]">
            <FlashList
              data={completedOrders}
              renderItem={({ index, item }) => (
                <OrderItem
                  key={index}
                  order={item}
                  ctaLabel="View Timeline"
                  handlePress={() => {}}
                />
              )}
              estimatedItemSize={100}
            />
          </View>
        </ScrollView>
      ) : (
        <EmptyCart headline="We are waiting for your first order" />
      )} */}
    </SafeAreaView>
  );
}
