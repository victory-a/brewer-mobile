import React from 'react';
import { View } from 'react-native';
import { ISizes } from '../model/product.model';
import { SelectButton, Text } from 'src/components';

interface ISelectSize {
  selectedSize: ISizes;
  setSelectedSize: (size: ISizes) => void;
  sizes: ISizes[];
}

export function SelectSize({ selectedSize, setSelectedSize, sizes }: ISelectSize) {
  if (!sizes) return null;

  return (
    <>
      <Text className="mt-5 text-base font-semibold text-secondary">Size</Text>

      <View className="mt-3 flex-row justify-between">
        {sizes.includes('small') ? (
          <SelectButton
            value="S"
            isSelected={selectedSize === 'small'}
            onPress={() => setSelectedSize('small')}
          />
        ) : null}
        {sizes.includes('medium') ? (
          <SelectButton
            value="M"
            isSelected={selectedSize === 'medium'}
            onPress={() => setSelectedSize('medium')}
          />
        ) : null}
        {sizes.includes('medium') ? (
          <SelectButton
            value="L"
            isSelected={selectedSize === 'large'}
            onPress={() => setSelectedSize('large')}
          />
        ) : null}
      </View>
    </>
  );
}
