import React from 'react';
import { Text, Pressable } from 'react-native';

interface ISolidButton {
  buttonclassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
export const SolidButton = ({
  buttonclassName = 'bg-primary rounded-2xl py-3',
  labelClassName = 'text-white text-center text-base font-semibold',
  children
}: ISolidButton) => {
  return (
    <Pressable className={buttonclassName}>
      <Text className={labelClassName}>{children}</Text>
    </Pressable>
  );
};
