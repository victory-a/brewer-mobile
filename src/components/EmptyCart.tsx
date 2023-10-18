import { Image, View } from 'react-native';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { SolidButton } from './formElements/Button';
import { ContainerView } from './shared/ContainerView';
import { Text } from './shared/Text';

const emptyCart = require('../../assets/images/empty-cart.png');

export function EmptyCart() {
  const { navigate } = useAppNavigation();

  return (
    <ContainerView className="flex-1 items-center justify-center pt-2">
      <Image source={emptyCart} />
      <Text className="text-secondary text-base mt-2 text-center">Your cart is empty</Text>
      <View className="mt-12 w-full max-w-[275]">
        <SolidButton onPress={() => navigate('Home')}>Place an Order 👀</SolidButton>
      </View>
    </ContainerView>
  );
}
