import { View } from 'react-native';

import { Pressable } from './shared/Pressable';
import { Text } from './shared/Text';
import { formatDatetime } from 'src/utils/time';
import { TextButton } from './formElements/Button';
import { Divider } from './shared/Divider';

interface IOrder {
  orderCode: string;
  date: Date;
}

interface IOrderItem {
  order: IOrder;
  handlePress: () => void;
  ctaLabel: string;
  containerClass?: string;
}

export function OrderItem({ order, ctaLabel, handlePress, containerClass = '' }: IOrderItem) {
  return (
    <View className={containerClass}>
      <Pressable className="py-2" onPress={handlePress} hitSlop={1} activeOpacity={0.6}>
        <Text className="text-base font-semibold">Order #{order.orderCode}</Text>

        <View className="flex-row justify-between">
          <Text className="text-sm mt-1">{formatDatetime(order.date)}</Text>
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
