import { ICoffeeCard } from './product';

export type AuthNavigatorParams = {
  Welcome: undefined;
  'Validate-OTP': { email: string };
  Login: undefined;
};

export type AppNavigatorParams = {
  AppBottomTabs: undefined;
  'View-Order-Modal': undefined;
  'Select-Location-Modal': undefined;
  'Product-Detail-Screen': { productID: number };
  'Ongoing-Order-Details': undefined;
  'Order-Completed': undefined;
  Home: undefined;
  Search: undefined;
  Orders: undefined;
  Profile: undefined;
};
