import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

interface IText extends TextProps {
  className?: string;
}

export function Text({ className, ...props }: IText) {
  return <NativeText className={`font-Sora-regular text-black ${className}`} {...props} />;
}
