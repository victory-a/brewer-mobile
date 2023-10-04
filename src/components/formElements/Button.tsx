import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface ISolidButton extends PressableProps {
  buttonclassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
export const SolidButton = ({
  buttonclassName = 'bg-primary rounded-lg py-3 w-full',
  labelClassName = 'text-white text-center text-base font-semibold',
  children,
  ...props
}: ISolidButton) => {
  return (
    <Pressable className={buttonclassName} {...props}>
      <Text className={labelClassName}>{children}</Text>
    </Pressable>
  );
};
