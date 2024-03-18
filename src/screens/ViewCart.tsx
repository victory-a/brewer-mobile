import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';

import { Divider, EmptyCart, Pressable, Text, TextButton } from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { useCart } from 'src/context/CartContext';

const ViewCart = () => {
  const { navigate } = useAppNavigation();

  const { state, clearCart } = useCart();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {state.products.length > 0 ? (
        <ScrollView className="mt-5 h-full px-2" showsVerticalScrollIndicator={false}>
          <View className="min-h-[2]">
            <View>
              <Pressable
                className="py-2"
                onPress={() => navigate('Cart-Details')}
                hitSlop={1}
                activeOpacity={0.6}
              >
                <Text className="text-base font-semibold">
                  {state.products.length > 1
                    ? `${state.products.length} items`
                    : `${state.products.length} item`}
                </Text>
                <Text className="mt-1 text-sm">
                  Delivering to 10 Babafemi drive, VI, Lagos state
                </Text>
                <Text className="mt-4 text-center text-xs text-dark-lemon-green">
                  View Selection
                </Text>
              </Pressable>
              <Divider additionalClassName="my-2" />
              <TextButton
                className="mt-4"
                labelClassName=" text-center text-xs text-red-ish"
                onPress={clearCart}
              >
                Clear cart
              </TextButton>
            </View>
          </View>
        </ScrollView>
      ) : (
        <EmptyCart headline="Your cart is empty" />
      )}
    </SafeAreaView>
  );
};

export { ViewCart };
