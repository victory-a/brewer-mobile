import { View, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Text } from './shared/Text';

const coffeebg = require('../../assets/images/bg-1.png');

const CoffeeCard = () => {
  return (
    <View className="bg-white w-full max-w-[152]" style={styles.shadow}>
      <Image source={coffeebg} className="w-full h-[100] rounded-t-lg" />
      <View className="py-3 px-4">
        <Text className="text-sm text-secondary font-semibold mb-1">Cappucino</Text>
        <Text className="text-xs text-nobel mb-3">with Chocolate</Text>
      </View>
    </View>
  );
};

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
