import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from 'navigation/AuthNavigator';
import { AppNavigator } from 'navigation/AppNavigator';
import { useAuth } from 'src/context/AuthContext';

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export { RootNavigator };
