import { View } from 'react-native';

import { Pressable } from './shared/Pressable';
import { Text } from './shared/Text';
import { formatDatetime } from 'src/utils';
import { TextButton } from './formElements/Button';
import { Divider } from './shared/Divider';
import { IOrderList } from 'src/model/order.model';

interface IOrderItem {
  order: IOrderList;
  handlePress: () => void;
  ctaLabel: string;
  containerClass?: string;
}

export function OrderItem({ order, ctaLabel, handlePress, containerClass = '' }: IOrderItem) {
  return (
    <View className={containerClass}>
      <Pressable className="py-2" onPress={handlePress} hitSlop={1} activeOpacity={0.6}>
        <Text className="text-base font-semibold">Order #{order.id}</Text>

        <View className="flex-row justify-between">
          <Text className="mt-1 text-sm">{formatDatetime(order.createdAt)}</Text>
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
