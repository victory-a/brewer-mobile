import React from 'react';
import { Pressable as NativePressable, PressableProps } from 'react-native';

interface IPressable extends PressableProps {
  activeOpacity?: number;
}

const Pressable = (props: IPressable) => {
  const { activeOpacity = 0.9, style, ...rest } = props;

  return (
    <NativePressable
      {...rest}
      style={(args) => {
        const appliedStyle = typeof style === 'function' ? style(args) : style;
        return [appliedStyle, { opacity: args.pressed ? activeOpacity : 1 }];
      }}
    />
  );
};

export { Pressable };
