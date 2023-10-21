import React from 'react';
import { PressableProps, ActivityIndicator, ImageSourcePropType, View, Image } from 'react-native';

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
      } w-full rounded-lg py-3 shadow-sm ${buttonclassName}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={`text-center text-base font-semibold text-white ${labelClassName}`}>
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
      <Text className={`text-center text-sm text-gray-67 ${labelClassName}`}>{children}</Text>
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
  label: string;
  image: ImageSourcePropType;
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
      {label}
    </TextButton>
  );
}
