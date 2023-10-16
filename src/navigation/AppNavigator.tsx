import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import SelectLocationModal from 'src/screens/SelectLocationModal';
import { ProductDetailScreen } from 'src/screens/ProductDetailScreen';
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
          headerTintColor: colors.primary
        }}
      />
      <Stack.Screen name="Select-Location-Modal" component={SelectLocationModal} />
    </Stack.Navigator>
  );
};

export { AppNavigator };
