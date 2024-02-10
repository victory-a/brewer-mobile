import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthNavigator } from 'navigation/AuthNavigator';
import { AppNavigator } from 'navigation/AppNavigator';

import { useAuth } from 'src/context/AuthContext';

import { colors } from 'src/styles/theme';
import { useValidateCurrentUser } from 'src/lib/hooks/auth';

const RootNavigator = () => {
  const { userDetails } = useAuth();

  const { validateCurrentUser, firstAttempt, isLoading } = useValidateCurrentUser();

  React.useEffect(() => {
    validateCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (firstAttempt || isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-coffee-brown">
        <ActivityIndicator color={colors.primary} size="small" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      {userDetails ? <AppNavigator /> : <AuthNavigator />}
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
