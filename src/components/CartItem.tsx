import React from 'react';
import { View } from 'react-native';

import { Text } from './shared/Text';
import { TextButton } from './formElements/Button';
import { Image } from './shared/Image';
import { useCart } from 'src/context/CartContext';
import { ICartProduct } from 'src/model/order.model';

const coffeebg1 = require('../../assets/images/coffee-1.png');

export function CartItem({ product, index }: { index: number; product: ICartProduct }) {
  const { increase, decrease, remove } = useCart();

  return (
    <View className="mb-4 w-full">
      <View className="mb-1 flex-row justify-between">
        <Text className="text-base font-semibold">Pack {index + 1}</Text>
        <TextButton
          labelClassName="text-red-300"
          onPress={() => remove({ temporaryUUID: product.temporaryUUID })}
        >
          Remove
        </TextButton>
      </View>

      <View className=" flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <Image
            // defaultSource={props.image || coffeebg1}
            defaultSource={coffeebg1}
            className="h-[54] w-[54] rounded-2xl"
            resizeMode="contain"
          />

          <View>
            <Text className="text-base font-semibold text-secondary">{product.name}</Text>
            <Text className="text-xs text-nobel">
              {product.selectedSize}, with {product.variant}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between space-x-4">
          <TextButton
            className="h-[33] w-[33] items-center justify-center rounded-full border border-whisper bg-white align-middle"
            labelClassName="text-primary font-semibold text-lg"
            onPress={() => decrease({ temporaryUUID: product.temporaryUUID })}
            disabled={product.quantity === 1}
          >
            -
          </TextButton>
          <Text>{product.quantity}</Text>
          <TextButton
            className="h-[33] w-[33] flex-row items-center justify-center rounded-full border border-whisper bg-white align-middle"
            labelClassName="text-primary font-semibold text-xl"
            onPress={() => increase({ temporaryUUID: product.temporaryUUID })}
          >
            +
          </TextButton>
        </View>
      </View>
    </View>
  );
}
