import React from 'react';
import { Text, Pressable } from 'react-native';

interface ISolidButton {
  buttonclassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
export const SolidButton = ({
  buttonclassName = 'bg-primary rounded-lg py-3 w-full max-w-[300px]',
  labelClassName = 'text-white text-center text-base font-semibold',
  children
}: ISolidButton) => {
  return (
    <Pressable className={buttonclassName}>
      <Text className={labelClassName}>{children}</Text>
    </Pressable>
  );
};
