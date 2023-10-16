import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'src/screens/HomeScreen';
import SearchScreen from 'src/screens/SearchScreen';
import OrdersScreen from 'src/navigation/OrderNavigator';
import ProfileScreen from 'src/screens/ProfileScreen';
import { colors } from 'src/styles/theme';
import { HomeIcon, IconProps, OrdersIcon, ProfileIcon, SearchIcon } from 'src/components/Icons';
import { Text } from 'src/components/shared/Text';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          paddingTop: 10,
          height: 90
        }
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
        component={OrdersScreen}
        options={{
          ...renderIcon(OrdersIcon, {}),
          tabBarLabel: (props) => renderLabel({ ...props, label: 'Orders' }),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            fontSize: 10,
            paddingHorizontal: 2,
            color: colors.primary,
            backfaceVisibility: 'hidden',
            backgroundColor: '#FFF5EE'
          }
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
