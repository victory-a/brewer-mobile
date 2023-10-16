import React from 'react';
import { PressableProps, ActivityIndicator } from 'react-native';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';
import { Pressable } from '../shared/Pressable';

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

interface ISelectButton extends PressableProps {
  value: string | number;
  isSelected: boolean;
}

export const SelectButton = ({ value = '', isSelected, ...props }: ISelectButton) => {
  return (
    <Pressable
      {...props}
      className={`w-full max-w-[96] py-[10] border flex flex-row justify-center items-center rounded-xl ${
        isSelected ? 'bg-[#FFF5EE] border-primary' : 'bg-white border-[#DEDEDE]'
      }`}
    >
      <Text className={`text-sm ${isSelected ? 'text-primary' : 'text-secondary'}`}>{value}</Text>
    </Pressable>
  );
};
