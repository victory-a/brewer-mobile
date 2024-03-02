import React from 'react';
import { View } from 'react-native';

import { Text } from './shared/Text';
import { TextButton } from './formElements/Button';
import { Image } from './shared/Image';
import { useCart } from 'src/context/CartContext';
import { ISizes } from 'src/model/product.model';

const coffeebg1 = require('../../assets/images/coffee-1.png');

interface ICartItem {
  index: number;
  image: string;
  name: string;
  size: ISizes;
  variant: string;
  quantity: number;
  productID: number;
}

export function CartItem(props: ICartItem) {
  const { increase, decrease } = useCart();

  return (
    <View className="mb-4 w-full">
      <View className="mb-1 flex-row justify-between">
        <Text className="text-base font-semibold">Pack {props.index + 1}</Text>
        <TextButton labelClassName="text-red-300" onPress={() => {}}>
          Remove
        </TextButton>
      </View>

      <View className=" flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <Image
            defaultSource={coffeebg1}
            className="h-[54] w-[54] rounded-2xl"
            resizeMode="contain"
          />

          <View>
            <Text className="text-base font-semibold text-secondary">{props.name}</Text>
            <Text className="text-xs text-nobel">
              {props.size}, with {props.variant}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between space-x-4">
          <TextButton
            className="h-[33] w-[33] items-center justify-center rounded-full border border-whisper bg-white align-middle"
            labelClassName="text-primary font-semibold text-lg"
            onPress={() => decrease({ productID: props.productID })}
            disabled={props.quantity === 1}
          >
            -
          </TextButton>
          <Text>{props.quantity}</Text>
          <TextButton
            className="h-[33] w-[33] flex-row items-center justify-center rounded-full border border-whisper bg-white align-middle"
            labelClassName="text-primary font-semibold text-xl"
            onPress={() => increase({ productID: props.productID })}
          >
            +
          </TextButton>
        </View>
      </View>
    </View>
  );
}
