import React from 'react';
import { Svg, Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const NGFlag: React.FC<IconProps> = ({ width = 18, height = 20, color = '' }) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 6 3" style={{ opacity: 0.8 }}>
      <Path fill="#008751" d="M0 0h6v3H0z" />
      <Path fill="#FFF" d="M2 0h2v3H2z" />
    </Svg>
  );
};

export const ArrowDown: React.FC<IconProps> = ({ width = 18, height = 20, color = 'none' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill={color}>
      <Path
        d="M11.0833 4.95833L6.99999 9.04167L2.91666 4.95833"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
