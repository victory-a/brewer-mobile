import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OrderTabNavigator from './OrderTabNavigator';

import { HomeScreen, ProfileScreen, SearchScreen } from 'src/screens';

import { Text, HomeIcon, IconProps, OrdersIcon, ProfileIcon, SearchIcon } from 'src/components';

import { colors } from 'src/styles/theme';
import { useCart } from 'src/context/CartContext';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const { state } = useCart();
  const productsCount = state.products.length;

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
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Search' }),
          headerShown: true,
          headerTintColor: colors.secondary,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.white }
        }}
      />
      <BottomTabs.Screen
        name="Orders"
        component={OrderTabNavigator}
        options={{
          ...renderIcon(OrdersIcon, {}),
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Orders' }),
          tabBarBadge: productsCount || undefined,
          headerStyle: { backgroundColor: colors.white },
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
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Profile' }),
          headerShown: true,
          headerTintColor: colors.secondary,
          headerShadowVisible: false,
          headerTitle: 'Personal Details'
        }}
      />
    </BottomTabs.Navigator>
  );
}

type IconComponent = React.ComponentType<IconProps>;
function renderIcon(
  Icon: IconComponent,
  { width = 20, height = 20 }: { width?: number; height?: number }
) {
  return {
    tabBarIcon: ({ color }: IconProps) => <Icon width={width} height={height} color={color} />
  };
}

interface IRenderLabel {
  label: string;
  focused: boolean;
  color: string;
}
function renderLabel(props: IRenderLabel) {
  const { focused } = props;

  return (
    <Text
      className={`-mt-1 text-[12px] ${focused && 'font-semibold'}`}
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
