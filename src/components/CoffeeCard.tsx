import { View, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Text } from './shared/Text';
import { formatCurrency } from 'src/utils/amount';
import { Pressable } from './shared/Pressable';
import { ICoffeeCard } from 'model/product';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';

const coffeebg1 = require('../../assets/images/coffee-1.png');

function CoffeeCard(product: ICoffeeCard) {
  const { title, type, thumbnail, amount } = product;
  const { navigate } = useAppNavigation();

  return (
    <Pressable
      className="min-w-[152] mb-5"
      onPress={() => navigate('Product-Detail-Screen', { product })}
    >
      <View className="bg-white  rounded-lg" style={styles.shadow}>
        <Image source={thumbnail ?? coffeebg1} className="w-full h-[100] rounded-t-lg" />
        <View className="py-3 px-4">
          <Text className="text-sm text-dark-lemon-green font-semibold capitalize">{title}</Text>
          <Text className="text-xs text-nobel mb-3">{type}</Text>
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
