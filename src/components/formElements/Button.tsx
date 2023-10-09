import React from 'react';
import { Pressable, PressableProps, ActivityIndicator } from 'react-native';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';

interface ISolidButton extends PressableProps {
  buttonclassName?: string;
  labelClassName?: string;
  loading?: boolean;
  activityLoaderColor?: string;
  children: React.ReactNode;
}
export const SolidButton = ({
  buttonclassName = '',
  labelClassName = '',
  loading = false,
  activityLoaderColor = colors.white,
  children,
  ...props
}: ISolidButton) => {
  return (
    <Pressable
      className={`${
        loading ? 'bg-[#808080]' : 'bg-primary'
      } rounded-lg py-3 w-full shadow-sm ${buttonclassName}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={`text-white text-center text-base font-semibold ${labelClassName}`}>
          {children}
        </Text>
      )}
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
