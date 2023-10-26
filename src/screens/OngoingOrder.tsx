import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { EmptyCart } from 'src/components';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { OrderItem } from 'src/components/OrderItem';

const dummyOrder = {
  orderCode: '1255334',
  date: new Date()
};
const ongoingOrders = Array.from({ length: 5 }, () => dummyOrder);

const OngoingOrder = () => {
  const { navigate } = useAppNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {dummyOrder ? (
        <ScrollView className="mt-5 px-2">
          <FlashList
            data={ongoingOrders}
            renderItem={({ index, item }) => (
              <OrderItem
                key={index}
                order={item}
                ctaLabel="Proceed to checkout"
                handlePress={() => navigate('Ongoing-Order-Details')}
              />
            )}
            estimatedItemSize={10}
          />
        </ScrollView>
      ) : (
        <EmptyCart headline="Your cart is empty" />
      )}
    </SafeAreaView>
  );
};

export { OngoingOrder };
