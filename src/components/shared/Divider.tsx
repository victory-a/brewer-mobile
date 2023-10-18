import { View } from 'react-native';
import React from 'react';

export const Divider = ({ additionalClassName = '' }: { additionalClassName?: string }) => {
  return <View className={`my-4 border-b border-whisper ${additionalClassName}`} />;
};
