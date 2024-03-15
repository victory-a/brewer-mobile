import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from 'src/styles/theme';

export function LoadingSpinner({ color = colors.primary }: { color: string }) {
  return (
    <View className="h-full bg-white px-2 pt-10">
      <ActivityIndicator color={color} />
    </View>
  );
}
