import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthNavigator } from 'navigation/AuthNavigator';
import { AppNavigator } from 'navigation/AppNavigator';

import { useAuth } from 'src/context/AuthContext';

import { colors } from 'src/styles/theme';

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer theme={MyTheme}>
      {!isAuthenticated ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export { RootNavigator };

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.snow
  }
};
