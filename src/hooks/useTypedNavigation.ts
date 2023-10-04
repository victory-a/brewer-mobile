import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthNavigatorParams } from 'src/model/navigation.model';

export const useAuthNavigation = () => useNavigation<StackNavigationProp<AuthNavigatorParams>>();
