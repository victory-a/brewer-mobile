import { SafeAreaView } from 'react-native';
import React from 'react';

import { EmptyCart } from 'src/components';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { OrderItem } from 'src/components/OrderItem';

const dummyOrder = {
  orderCode: '1255334',
  date: new Date()
};

const OngoingOrder = () => {
  const { navigate } = useAppNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {dummyOrder ? (
        <OrderItem
          containerClass="mt-2"
          order={dummyOrder}
          ctaLabel="Proceed to checkout"
          handlePress={() => navigate('Ongoing-Order-Details')}
        />
      ) : (
        <EmptyCart headline="Your cart is empty" />
      )}
    </SafeAreaView>
  );
};

export { OngoingOrder };
