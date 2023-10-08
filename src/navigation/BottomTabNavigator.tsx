import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={() => <Text>Search</Text>} />
      <Tab.Screen name="Orders" component={() => <Text>Orders</Text>} />
      <Tab.Screen name="Settings" component={() => <Text>Settings</Text>} />
    </Tab.Navigator>
  );
}
