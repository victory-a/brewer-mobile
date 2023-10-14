import { ICoffeeCard } from './product';

export type AuthNavigatorParams = {
  Welcome: undefined;
  Register: undefined;
  'Validate-OTP': undefined;
  Login: undefined;
};

export type AppNavigatorParams = {
  AppBottomTabs: undefined;
  'Select-Location-Modal': undefined;
  'Product-Detail-Screen': { product: ICoffeeCard };
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  Profile: undefined;
};
