import React from 'react';
import { Svg, Path } from 'react-native-svg';

export type IconProps = {
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

export const HomeIcon: React.FC<IconProps> = ({ width = 18, height = 20, color = '#fff' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M3.00003 13H4.00003V20C4.00003 21.103 4.89703 22 6.00003 22H18C19.103 22 20 21.103 20 20V13H21C21.1978 12.9999 21.3911 12.9412 21.5555 12.8314C21.7199 12.7215 21.848 12.5653 21.9237 12.3826C21.9994 12.1999 22.0192 11.9989 21.9806 11.8049C21.942 11.611 21.8468 11.4328 21.707 11.293L12.707 2.29296C12.6142 2.20001 12.504 2.12627 12.3827 2.07596C12.2614 2.02565 12.1314 1.99976 12 1.99976C11.8687 1.99976 11.7387 2.02565 11.6173 2.07596C11.496 2.12627 11.3858 2.20001 11.293 2.29296L2.29303 11.293C2.15322 11.4328 2.05802 11.611 2.01945 11.8049C1.98088 11.9989 2.00068 12.1999 2.07635 12.3826C2.15202 12.5653 2.28016 12.7215 2.44457 12.8314C2.60898 12.9412 2.80228 12.9999 3.00003 13ZM10 20V15H14V20H10ZM12 4.41396L18 10.414V15L18.001 20H16V15C16 13.897 15.103 13 14 13H10C8.89703 13 8.00003 13.897 8.00003 15V20H6.00003V10.414L12 4.41396Z"
        fill={color}
      />
    </Svg>
  );
};

export const OrdersIcon: React.FC<IconProps> = ({ width = 18, height = 20, color = '#fff' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.8629 10.0714L15.1364 9.88506C14.9416 10.6442 14.4996 11.3168 13.8801 11.7968C13.2606 12.2767 12.4989 12.5367 11.7153 12.5357L11.7133 12.5357C10.9296 12.5367 10.1679 12.2767 9.54843 11.7968C8.92893 11.3168 8.48693 10.6442 8.29219 9.88506L8.29224 9.88504L8.28981 9.87604C8.28307 9.85104 8.28634 9.82382 8.30902 9.79476C8.33262 9.76454 8.36423 9.75 8.39714 9.75C8.41056 9.75 8.42461 9.75299 8.44463 9.76978C8.4676 9.78903 8.49746 9.82746 8.51491 9.88795C8.7079 10.5876 9.1249 11.2047 9.70209 11.6447C10.2803 12.0855 10.9872 12.3243 11.7143 12.3243C12.4413 12.3243 13.1483 12.0855 13.7265 11.6447C14.3037 11.2047 14.7207 10.5875 14.9137 9.8879C14.9311 9.82744 14.961 9.78903 14.9839 9.76978C15.004 9.75299 15.018 9.75 15.0314 9.75C15.0627 9.75 15.0918 9.76308 15.1148 9.79279C15.138 9.82267 15.144 9.8552 15.1359 9.88681L15.8629 10.0714ZM15.8629 10.0714C16 9.53143 15.5886 9 15.0314 9C14.6286 9 14.3029 9.29143 14.1914 9.68571L7.56571 10.0714C7.80186 10.9919 8.33785 11.8076 9.08908 12.3896C9.8403 12.9717 10.764 13.287 11.7143 13.2857C12.6646 13.287 13.5883 12.9717 14.3395 12.3896C15.0907 11.8076 15.6267 10.9919 15.8629 10.0714ZM17.7143 6.53571H16.6945C16.332 4.11115 14.2394 2.25 11.7143 2.25C9.18921 2.25 7.09657 4.11115 6.73411 6.53571H5.71429C4.35721 6.53571 3.25 7.64293 3.25 9V19.2857C3.25 20.6428 4.35722 21.75 5.71429 21.75H17.7143C19.0714 21.75 20.1786 20.6428 20.1786 19.2857V9C20.1786 7.64293 19.0714 6.53571 17.7143 6.53571ZM11.7143 5.46429C12.4553 5.46429 13.0906 5.90297 13.3756 6.53571H10.053C10.338 5.90297 10.9733 5.46429 11.7143 5.46429Z"
        stroke={color}
        stroke-width="1.5"
      />
    </Svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({ width = 18, height = 20, color = '#fff' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
        fill={color}
      />
    </Svg>
  );
};

export const ProfileIcon: React.FC<IconProps> = ({ width = 18, height = 20, color = '#fff' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z"
        fill={color}
      />
    </Svg>
  );
};

export const BackIcon: React.FC<IconProps> = ({ width = 20, height = 20, color = '#fff' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.8282 12L16.1211 6.70706L14.7069 5.29285L7.99976 12L14.7069 18.7071L16.1211 17.2928L10.8282 12Z"
        fill={color}
      />
    </Svg>
  );
};

export const StarIcon: React.FC<IconProps> = ({ width = 20, height = 20, color = '#FBBE21' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65834 14.0917 6.73334L16.75 7.17501C18.45 7.45834 18.85 8.69168 17.625 9.90834L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63332 16.05 9.17499 16.3167L6.68332 17.7917C4.89999 18.85 3.81665 18.0583 4.28332 16.0417L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90834C1.15832 8.69168 1.54999 7.45834 3.24999 7.17501L5.90832 6.73334C6.34999 6.65834 6.88332 6.26668 7.08332 5.85835L8.54999 2.92501C9.34999 1.33335 10.65 1.33335 11.4417 2.92501Z"
        fill={color}
      />
    </Svg>
  );
};

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path
    d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65834 14.0917 6.73334L16.75 7.17501C18.45 7.45834 18.85 8.69168 17.625 9.90834L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63332 16.05 9.17499 16.3167L6.68332 17.7917C4.89999 18.85 3.81665 18.0583 4.28332 16.0417L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90834C1.15832 8.69168 1.54999 7.45834 3.24999 7.17501L5.90832 6.73334C6.34999 6.65834 6.88332 6.26668 7.08332 5.85835L8.54999 2.92501C9.34999 1.33335 10.65 1.33335 11.4417 2.92501Z"
    fill="#FBBE21"
  />
</svg>;
