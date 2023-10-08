import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import SelectLocationModal from 'src/screens/SelectLocationModal';

// const modalScreenOptions: Partial<StackNavigationOptions> = {
//   gestureDirection: 'vertical',
//   gestureEnabled: true,
//   cardOverlayEnabled: true,
//   cardStyleInterpolator: Platform.select({
//     ios: CardStyleInterpolators.forModalPresentationIOS,
//     android: CardStyleInterpolators.forRevealFromBottomAndroid,
//   }),
// };

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AppBottomTabs">
      <Stack.Screen name="AppBottomTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Select-Location-Modal" component={SelectLocationModal} />
    </Stack.Navigator>
  );
};

export { AppNavigator };
