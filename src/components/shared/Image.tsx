import React from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

export const Image = (props: Omit<FastImageProps, 'defaultSource'> & { defaultSource: any }) => {
  return <FastImage {...props} />;
};
