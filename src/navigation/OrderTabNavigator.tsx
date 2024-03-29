import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CompletedOrders } from '../screens/CompletedOrders';
import { OngoingOrder } from '../screens/OngoingOrder';
import { ContainerView, Text } from 'src/components';
import { colors } from 'src/styles/theme';
import { ViewCart } from 'src/screens/ViewCart';

const Tabs = createMaterialTopTabNavigator();
const OrderTabNavigator = () => {
  return (
    <View className="flex-1 bg-white">
      <ContainerView className="flex-1 bg-white pt-4">
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: { textTransform: 'none', fontFamily: 'Sora-Regular' },
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.secondary,
            tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
            tabBarLabel: ({ focused }) => <Label name={route.name} focused={focused} />
          })}
        >
          <Tabs.Screen name="Cart" component={ViewCart} />
          <Tabs.Screen name="Ongoing" component={OngoingOrder} />
          <Tabs.Screen name="Completed" component={CompletedOrders} />
        </Tabs.Navigator>
      </ContainerView>
    </View>
  );
};

export default OrderTabNavigator;

function Label({ name, focused }: { name: string; focused: boolean }) {
  return (
    <Text
      className={`${
        focused ? 'font-semibold text-white' : 'font-normal text-secondary'
      } mb-1 text-sm`}
    >
      {name}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: '99%',
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F2F2F2'
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.primary,
    height: 40,
    margin: 4,
    borderRadius: 10,
    width: '31%'
  }
});
