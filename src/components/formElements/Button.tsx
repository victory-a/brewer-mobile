import React from 'react';
import { Pressable, PressableProps } from 'react-native';

import { Text } from '../shared/Text';

interface ISolidButton extends PressableProps {
  buttonclassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
export const SolidButton = ({
  buttonclassName = '',
  labelClassName = '',
  children,
  ...props
}: ISolidButton) => {
  return (
    <Pressable
      className={`bg-primary rounded-lg py-3 w-full shadow-sm ${buttonclassName}`}
      {...props}
    >
      <Text className={`text-white text-center text-base font-semibold ${labelClassName}`}>
        {children}
      </Text>
    </Pressable>
  );
};

interface ITextButton extends PressableProps {
  buttonclassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}
export const TextButton = ({
  buttonclassName = '',
  labelClassName = '',
  hitSlop = 8,
  children,
  ...props
}: ITextButton) => {
  return (
    <Pressable className={` bg-white ${buttonclassName}`} hitSlop={hitSlop} {...props}>
      <Text className={`text-gray-67 text-center text-sm ${labelClassName}`}>{children}</Text>
    </Pressable>
  );
};
