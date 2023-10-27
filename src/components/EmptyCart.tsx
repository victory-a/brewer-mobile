import { View } from 'react-native';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { SolidButton, TextButton } from './formElements/Button';
import { ContainerView } from './shared/ContainerView';
import { Text } from './shared/Text';
import { Image } from './shared/Image';

const emptyCart = require('../../assets/images/empty-cart.png');

export function EmptyCart({
  headline = '',
  dummyOrder = false
}: {
  headline: string;
  dummyOrder?: boolean;
}) {
  const { navigate } = useAppNavigation();

  return (
    <ContainerView className="flex-1 items-center justify-center px-3 pt-2">
      <Image defaultSource={emptyCart} className="min-h-[250] min-w-[250]" />
      <Text className="mt-2 text-center text-base text-secondary">{headline}</Text>
      <View className="mt-12 w-full max-w-[275]">
        <SolidButton onPress={() => navigate('Home')}>Place an Order 👀</SolidButton>
      </View>
      {dummyOrder && (
        <TextButton onPress={() => navigate('Ongoing-Order-Details')} className="mt-5">
          View dummy order
        </TextButton>
      )}
    </ContainerView>
  );
}
