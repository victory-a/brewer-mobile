import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { Text } from './shared/Text';
import { formatCurrency } from 'src/utils/amount';
import { Pressable } from './shared/Pressable';
import { ICoffeeCard } from 'model/product';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { Image } from './shared/Image';

function CoffeeCard(product: ICoffeeCard) {
  const { title, type, thumbnail, amount } = product;
  const { navigate } = useAppNavigation();

  return (
    <Pressable
      className="mx-auto mb-5 min-w-[152]"
      onPress={() => navigate('Product-Detail-Screen', { product })}
    >
      <View className="rounded-lg bg-white" style={styles.shadow}>
        <Image defaultSource={thumbnail as number} className="h-[100] w-full rounded-t-lg" />
        <View className="px-4 py-3">
          <Text className="text-sm font-semibold capitalize text-dark-lemon-green">{title}</Text>
          <Text className="mb-3 text-xs text-nobel">{type}</Text>
          <Text className="text-base font-semibold text-dark-lemon-green">
            {formatCurrency(amount)}
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
