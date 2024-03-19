import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { Text } from './shared/Text';
import { Pressable } from './shared/Pressable';
import { Image } from './shared/Image';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';

import { formatCurrency } from 'src/utils';
import { IProduct } from 'src/model/order.model';

type PartialProductDetails = Pick<IProduct, 'id' | 'image' | 'name' | 'basePrice' | 'variant'>;

function CoffeeCard({ name, variant, image, basePrice, id }: PartialProductDetails) {
  const { navigate } = useAppNavigation();

  return (
    <Pressable
      className="mx-auto mb-5 min-w-[152]"
      onPress={() => navigate('Product-Detail-Screen', { productID: id })}
    >
      <View className="rounded-lg bg-white" style={styles.shadow}>
        <Image defaultSource={image as number} className="h-[100] w-full rounded-t-lg" />
        <View className="px-4 py-3">
          <Text className="text-sm font-semibold capitalize text-dark-lemon-green">{name}</Text>
          <Text className="mb-2 text-xs text-nobel">{variant}</Text>
          <Text className="text-sm font-semibold text-dark-lemon-green">
            {formatCurrency(basePrice)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export { CoffeeCard };

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(62, 62, 62, 0.06)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
        shadowOpacity: 1
      },
      android: {
        elevation: 4
      }
    })
  }
});
