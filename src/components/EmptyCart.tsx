import { View } from 'react-native';

import { SolidButton } from './formElements/Button';
import { ContainerView } from './shared/ContainerView';
import { Text } from './shared/Text';
import { Image } from './shared/Image';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const emptyCart = require('../../assets/images/empty-cart.png');

export function EmptyCart({ headline = '' }: { headline: string }) {
  const { navigate } = useAppNavigation();

  return (
    <ContainerView className="flex-1 items-center justify-center px-3 pt-2">
      <Image defaultSource={emptyCart} className="min-h-[250] min-w-[250]" />
      <Text className="mt-2 text-center text-base text-secondary">{headline}</Text>
      <View className="mt-12 w-full max-w-[275]">
        <SolidButton onPress={() => navigate('Home')}>Place an Order 👀</SolidButton>
      </View>
    </ContainerView>
  );
}
