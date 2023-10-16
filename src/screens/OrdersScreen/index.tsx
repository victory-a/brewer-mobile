import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Completed } from './Completed';
import { Ongoing } from './Ongoing';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tabs = createMaterialTopTabNavigator();
const OrdersScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tabs.Navigator
        screenOptions={{ tabBarLabelStyle: { textTransform: 'none', fontFamily: 'Sora-Regular' } }}
      >
        <Tabs.Screen name="Ongoing" component={Ongoing} />
        <Tabs.Screen name="Completed" component={Completed} />
      </Tabs.Navigator>
    </SafeAreaView>
  );
};

export default OrdersScreen;
