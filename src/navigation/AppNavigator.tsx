import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <SafeAreaView className="bg-white">
      <Text className="text-primary">AppNavigator</Text>
    </SafeAreaView>
  );
};

export { AppNavigator };
