import { Text as NativeText, TextProps } from 'react-native';
import React from 'react';

interface IText extends TextProps {
  className?: string;
}

export function Text({ className, ...props }: IText) {
  return <NativeText className={`font-Sora-regular text-black ${className}`} {...props} />;
}
