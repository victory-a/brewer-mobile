import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { CompletedOrder } from '../screens/CompletedOrder';
import { OngoingOrder } from '../screens/OngoingOrder';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'src/components/shared/Text';
import { colors } from 'src/styles/theme';
import { ContainerView } from 'src/components/shared/ContainerView';
import { StyleSheet } from 'react-native';

const Tabs = createMaterialTopTabNavigator();
const OrdersScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
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
    </SafeAreaView>
  );
};

export default OrdersScreen;

function Label({ name, focused }: { name: string; focused: boolean }) {
  return (
    <Text className={`${focused ? 'text-white' : 'text-secondary font-normal'} text-sm `}>
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
