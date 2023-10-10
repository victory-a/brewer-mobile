import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'src/screens/HomeScreen';
import SearchScreen from 'src/screens/SearchScreen';
import OrdersScreen from 'src/screens/OrdersScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import { colors } from 'src/styles/theme';
import { HomeIcon, IconProps, OrdersIcon, ProfileIcon, SearchIcon } from 'src/components/Icons';
import { Text } from 'src/components/shared/Text';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...renderIcon(HomeIcon, {}),
          tabBarLabel: ({ color }) => renderLabel('Home', color)
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          ...renderIcon(SearchIcon, {}),
          tabBarLabel: ({ color }) => renderLabel('Search', color)
        }}
      />
      <BottomTabs.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          ...renderIcon(OrdersIcon, {}),
          tabBarLabel: ({ color }) => renderLabel('Orders', color)
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...renderIcon(ProfileIcon, {}),
          tabBarLabel: ({ color }) => renderLabel('Profile', color)
        }}
      />
    </BottomTabs.Navigator>
  );
}

function renderIcon(Icon: any, { width = 20, height = 20 }: { width?: number; height?: number }) {
  return {
    tabBarIcon: ({ color }: IconProps) => <Icon width={width} height={height} color={color} />
  };
}

function renderLabel(label: string, color: string) {
  return (
    <Text className="text-[10px] -mt-1" style={{ color }}>
      {label}
    </Text>
  );
}
