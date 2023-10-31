import React from 'react';
import { View } from 'react-native';

export const Divider = ({ additionalClassName = '' }: { additionalClassName?: string }) => {
  return <View className={`my-4 border-b border-whisper ${additionalClassName}`} />;
};
