import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, ValidateOTP, Welcome } from 'src/screens';
import { colors } from 'src/styles/theme';

const defaultOptions = {
  headerShown: false,
  headerShadowVisible: false,
  headerTitle: ''
};

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={defaultOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Validate-OTP"
        component={ValidateOTP}
        options={{
          headerShown: true,
          headerTintColor: colors.primary
        }}
      />
    </Stack.Navigator>
  );
};

export { AuthNavigator };
