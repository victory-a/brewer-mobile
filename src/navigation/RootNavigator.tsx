import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from 'navigation/AuthNavigator';
import { AppNavigator } from 'navigation/AppNavigator';

const isAuthenticated = false;
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export { RootNavigator };
