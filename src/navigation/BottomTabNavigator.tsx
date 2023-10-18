import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen, SearchScreen } from 'src/screens';
import { colors } from 'src/styles/theme';
import { HomeIcon, IconProps, OrdersIcon, ProfileIcon, SearchIcon } from 'src/components/Icons';
import { Text } from 'src/components';
import OrderTabNavigator from './OrderTabNavigator';
import { StyleSheet } from 'react-native';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
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
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Home' })
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          ...renderIcon(SearchIcon, {}),
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Search' })
        }}
      />
      <BottomTabs.Screen
        name="Orders"
        component={OrderTabNavigator}
        options={{
          ...renderIcon(OrdersIcon, {}),
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Orders' }),
          tabBarBadge: 3,
          headerStyle: { backgroundColor: colors.snow },
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
          headerShown: true,
          headerTintColor: colors.secondary,
          headerShadowVisible: false
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...renderIcon(ProfileIcon, {}),
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Profile' })
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

interface IRenderLabel {
  label: string;
  focused: boolean;
  color: string;
  children: string;
}
function renderLabel(props: IRenderLabel) {
  const { focused } = props;

  return (
    <Text
      className={`text-[12px] -mt-1 ${focused && 'font-semibold'}`}
      style={{ color: props.color }}
    >
      {props.label}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBarBadgeStyle: {
    fontSize: 10,
    paddingHorizontal: 2,
    color: colors.primary,
    backfaceVisibility: 'hidden',
    backgroundColor: '#FFF5EE'
  }
});
