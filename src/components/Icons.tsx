import React from 'react';
import { Svg, Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const TestIcon: React.FC<IconProps> = ({ width = 40, height = 40, color = '' }) => {
  return (
    <Svg width={width} height={height} fill={color}>
      <Path></Path>
    </Svg>
  );
};
