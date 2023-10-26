import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { EmptyCart } from 'src/components';
// import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { OrderItem } from 'src/components/OrderItem';

const dummyOrder = {
  orderCode: '1255334',
  date: new Date()
};

const completedOrders = Array.from({ length: 5 }, () => dummyOrder);

export function CompletedOrders() {
  // const { navigate } = useAppNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <EmptyCart headline="We are waiting for your first order" />

      {/* {dummyOrder ? (
        <ScrollView className="mt-5 px-2" showsVerticalScrollIndicator={false}>
          <FlashList
            data={completedOrders}
            renderItem={({ index, item }) => (
              <OrderItem key={index} order={item} ctaLabel="View Timeline" handlePress={() => {}} />
            )}
            estimatedItemSize={100}
          />
        </ScrollView>
      ) : (
        <EmptyCart headline="We are waiting for your first order" />
      )} */}
    </SafeAreaView>
  );
}
