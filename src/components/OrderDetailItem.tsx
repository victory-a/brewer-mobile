import React from 'react';
import { View } from 'react-native';

import { Text } from './shared/Text';
import { Image } from './shared/Image';
import { ISingleOrderProduct } from 'src/model/order.model';

const coffeebg1 = require('../../assets/images/coffee-1.png');

export function OrderDetailItem({ product }: { product: ISingleOrderProduct }) {
  return (
    <View className="mb-4 w-full">
      <View className="w-full  flex-row items-center justify-between">
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
              {product.size}, with {product.variant}
            </Text>
          </View>
        </View>
        <Text className=" text-sm text-dark-lemon-green">x{product.quantity}</Text>
      </View>
    </View>
  );
}
