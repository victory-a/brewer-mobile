import { SafeAreaView, ScrollView, View, RefreshControl } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';

import { EmptyCart } from 'src/components';
import { OrderItem } from 'src/components/OrderItem';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { useCart } from 'src/context/CartContext';
import { ViewCartItem } from 'src/components/ViewCartItem';

const ViewCart = () => {
  const { navigate } = useAppNavigation();

  const { state } = useCart();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {state.products.length > 0 ? (
        <ScrollView className="mt-5 h-full px-2" showsVerticalScrollIndicator={false}>
          <View className="min-h-[2]">
            <FlashList
              data={state.products}
              renderItem={({ index, item }) => (
                <ViewCartItem
                  key={index}
                  product={item}
                  ctaLabel="View Details"
                  handlePress={() => navigate('Cart-Details')}
                />
              )}
              estimatedItemSize={20}
            />
          </View>
        </ScrollView>
      ) : (
        <EmptyCart headline="Your cart is empty" />
      )}
    </SafeAreaView>
  );
};

export { ViewCart };
