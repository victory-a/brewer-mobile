import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import SelectLocationModal from 'src/screens/Modals/SelectLocationModal';
import { ProductDetailScreen } from 'src/screens/ProductDetailScreen';
import { OrderCompleted, OrderDetails } from 'src/screens';

import { colors } from 'src/styles/theme';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
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
      <Stack.Screen name="Select-Location-Modal" component={SelectLocationModal} />
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
      <Stack.Screen name="Order-Completed" component={OrderCompleted} />
    </Stack.Navigator>
  );
};

export { AppNavigator };
