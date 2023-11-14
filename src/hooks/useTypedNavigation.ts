import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppNavigatorParams, AuthNavigatorParams } from 'src/model/navigation.model';

export const useAuthNavigation = () => useNavigation<StackNavigationProp<AuthNavigatorParams>>();
export const useAppNavigation = () => useNavigation<StackNavigationProp<AppNavigatorParams>>();

export const useAuthNavigationRoute = () => useRoute<RouteProp<AuthNavigatorParams>>();
export const useAppNavigationRoute = () => useRoute<RouteProp<AppNavigatorParams>>();
