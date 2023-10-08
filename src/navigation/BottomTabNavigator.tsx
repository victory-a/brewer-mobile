import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Text>Home</Text>} />
      <Tab.Screen name="Settings" component={() => <Text>Setings</Text>} />
    </Tab.Navigator>
  );
}
