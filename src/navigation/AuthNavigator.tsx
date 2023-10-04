import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from 'src/screens/auth/Welcome';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export { AuthNavigator };
