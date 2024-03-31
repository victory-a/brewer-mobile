import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from 'src/context/CartContext';
import BottomTabNavigator from './BottomTabNavigator';
import {
  OrderCompleted,
  OrderDetails,
  ProductDetailScreen,
  CompletedOrderDetails,
  CartDetails
} from 'src/screens';

import { colors } from 'src/styles/theme';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <CartProvider>
      <Stack.Navigator
        initialRouteName="AppBottomTabs"
        screenOptions={{ headerShown: false, headerShadowVisible: false, headerTitle: '' }}
      >
        <Stack.Screen name="AppBottomTabs" component={BottomTabNavigator} />
        <Stack.Screen
          name="Product-Detail-Screen"
          component={ProductDetailScreen}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTintColor: colors.secondary,
            headerTitle: 'Product Details'
          }}
        />
        <Stack.Screen
          name="Ongoing-Order-Details"
          component={OrderDetails}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTintColor: colors.secondary,
            headerTitle: 'Order Details'
          }}
        />
        <Stack.Screen
          name="Completed-Order-Details"
          component={CompletedOrderDetails}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTintColor: colors.secondary,
            headerTitle: 'Order Details'
          }}
        />
        <Stack.Screen
          name="Cart-Details"
          component={CartDetails}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTintColor: colors.secondary,
            headerTitle: 'Cart Details'
          }}
        />
        <Stack.Screen name="Order-Completed" component={OrderCompleted} />
      </Stack.Navigator>
    </CartProvider>
  );
};

export { AppNavigator };
