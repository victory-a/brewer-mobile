import React from 'react';
import { View as NativeView, ViewProps } from 'react-native';

interface IView extends ViewProps {
  className?: string;
}
export function ContainerView({ className, ...props }: IView) {
  return <NativeView className={`mx-auto w-[85%] ${className}`} {...props} />;
}
