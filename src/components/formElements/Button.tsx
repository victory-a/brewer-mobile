import React from 'react';
import { PressableProps, ActivityIndicator, View } from 'react-native';
import { Source } from 'react-native-fast-image';

import { Text } from '../shared/Text';
import { colors } from 'src/styles/theme';
import { Pressable } from '../shared/Pressable';
import { Image } from '../shared/Image';

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
  disabled,
  ...props
}: ISolidButton) => {
  return (
    <Pressable
      className={`${
        disabled ? 'bg-faded-brown' : 'bg-primary'
      } w-full rounded-lg py-3 shadow-sm ${buttonclassName}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <View className="py-1">
          <ActivityIndicator color="white" />
        </View>
      ) : (
        <Text className={`text-center text-lg font-semibold text-white ${labelClassName}`}>
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
    <Pressable className={` bg-white ${buttonclassName} `} hitSlop={hitSlop} {...props}>
      <Text
        className={`text-center text-sm text-gray-67 ${labelClassName} ${
          props.disabled && 'opacity-20'
        }`}
      >
        {children}
      </Text>
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
      className={`flex w-full max-w-[96] flex-row items-center justify-center rounded-xl border py-[10] ${
        isSelected ? 'border-primary bg-[#FFF5EE]' : 'border-[#DEDEDE] bg-white'
      }`}
    >
      <Text className={`text-sm ${isSelected ? 'text-primary' : 'text-secondary'}`}>{value}</Text>
    </Pressable>
  );
};

type SoftButtonType = PressableProps & {
  label?: string;
  image?: Source;
  additionalClassName?: string;
};
export function SoftButton({ label, image, additionalClassName = '', ...props }: SoftButtonType) {
  return (
    <TextButton
      className={`rounded-2xl border border-[#DEDEDE] bg-transparent px-3 py-[6px] ${additionalClassName}`}
      labelClassName="text-mid-gray text-sm"
      {...props}
    >
      {image && (
        <View className="mr-1">
          <Image source={image} />
        </View>
      )}
      {label && label}
    </TextButton>
  );
}
