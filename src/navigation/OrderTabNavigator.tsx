import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CompletedOrder } from '../screens/CompletedOrder';
import { OngoingOrder } from '../screens/OngoingOrder';
import { Text, ContainerView } from 'src/components';
import { colors } from 'src/styles/theme';

const Tabs = createMaterialTopTabNavigator();
const OrderTabNavigator = () => {
  return (
    <View className="flex-1 pt-3 bg-white">
      <ContainerView className="flex-1">
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
          <Tabs.Screen name="Ongoing" component={OngoingOrder} />
          <Tabs.Screen name="Completed" component={CompletedOrder} />
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
        focused ? 'text-white font-semibold' : 'text-secondary font-normal'
      } text-sm mb-1`}
    >
      {name}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: '99%',
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F2F2F2'
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.primary,
    height: 36,
    margin: 4,
    borderRadius: 10
  }
});
