import { View as NativeView, ViewProps } from 'react-native';
import React from 'react';

interface IView extends ViewProps {
  className?: string;
}
export function ContainerView({ className, ...props }: IView) {
  return <NativeView className={`mx-auto w-[85%] ${className}`} {...props} />;
}
