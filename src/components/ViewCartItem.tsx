import { View } from 'react-native';

import { Pressable } from './shared/Pressable';
import { Text } from './shared/Text';
import { formatDatetime } from 'src/utils/time';
import { TextButton } from './formElements/Button';
import { Divider } from './shared/Divider';
import { ICartProduct, ISingleOrder } from 'src/model/order.model';

interface IViewCartItem {
  product: ICartProduct;
  handlePress: () => void;
  ctaLabel: string;
  containerClass?: string;
}

export function ViewCartItem({
  product,
  ctaLabel,
  handlePress,
  containerClass = ''
}: IViewCartItem) {
  return (
    <View className={containerClass}>
      <Pressable className="py-2" onPress={handlePress} hitSlop={1} activeOpacity={0.6}>
        <Text className="text-base font-semibold">{product.name}</Text>

        <View className="flex-row justify-between">
          <Text className="mt-1 text-sm">
            {product.selectedSize} x {product.quantity}
          </Text>
          <TextButton
            labelClassName="text-dark-lemon-green text-xs"
            buttonclassName="bg-transparent"
            onPress={handlePress}
          >
            {ctaLabel}
          </TextButton>
        </View>
      </Pressable>
      <Divider additionalClassName="my-2" />
    </View>
  );
}
