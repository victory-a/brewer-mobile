import { SafeAreaView, View } from 'react-native';
import React from 'react';

import { EmptyCart } from 'src/components';

const cartItems = [];

const OngoingOrder = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      {cartItems.length === 0 ? <EmptyCart /> : <View></View>}
    </SafeAreaView>
  );
};

export { OngoingOrder };
