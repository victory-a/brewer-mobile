import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from 'src/screens/auth/Welcome';
import { Register } from 'src/screens/auth/Register';
import { Login } from 'src/screens/auth/Login';

const defaultOptions = {
  headerShown: false,
  headerShadowVisible: false,
  headerTitle: ''
};

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ ...defaultOptions, headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ ...defaultOptions, headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ ...defaultOptions, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { AuthNavigator };
