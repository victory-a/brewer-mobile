import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';

import { EmptyCart, Text } from 'src/components';

const dummyOrder = {
  orderCode: '1255334',
  date: new Date()
};

const OngoingOrder = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      {dummyOrder ? <OrderList order={dummyOrder} /> : <EmptyCart />}
    </SafeAreaView>
  );
};

export { OngoingOrder };

interface IOrder {
  orderCode: string;
  date: Date;
}

function OrderList({ order }: { order: IOrder }) {
  return (
    <ScrollView>
      <View>
        <Text>Order #{order.orderCode}</Text>
        <View></View>
      </View>
    </ScrollView>
  );
}
