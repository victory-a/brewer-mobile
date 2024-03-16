import React from 'react';
import { View } from 'react-native';

import { SolidButton, TextButton, Text, ContainerView } from 'src/components';
import { useCart } from 'src/context/CartContext';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { IProduct, ISizes } from 'src/model/order.model';
import { formatCurrency } from 'src/utils/amount';

interface ITotalDisplay {
  product: IProduct;
  selectedSize: ISizes;
}

export function TotalDisplay({ product, selectedSize }: ITotalDisplay) {
  const { navigate } = useAppNavigation();

  const [quantity, setQuantity] = React.useState(1);

  function handleRemove() {
    if (quantity === 1) {
      navigate('AppBottomTabs');
    } else {
      setQuantity((curr) => (curr > 0 ? curr - 1 : curr));
    }
  }

  function handleAdd() {
    setQuantity((curr) => curr + 1);
  }

  function computeUnitPrice() {
    let total = 0;
    const addition = product[selectedSize];
    if (addition) {
      total = (Number(product.basePrice) + Number(addition)) * quantity;
    } else {
      total = Number(product.basePrice) * quantity;
    }
    return total;
  }

  const total = computeUnitPrice();

  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({ product: { ...product, quantity, selectedSize } });
    navigate('AppBottomTabs');
  }

  return (
    <View className="absolute bottom-3 w-full border-t-[0.3px] border-lighter-gray bg-white py-6">
      <ContainerView className="items-center">
        <View className="w-full flex-1 flex-row space-x-6">
          <View className="flex-[50%] flex-row items-center justify-between">
            <TextButton
              className="rounded-lg bg-[#F3F3F3] px-4 py-2"
              labelClassName="text-secondary font-semibold text-lg"
              onPress={handleRemove}
            >
              -
            </TextButton>
            <Text>{quantity}</Text>
            <TextButton
              className="rounded-lg bg-[#F3F3F3] px-4 py-2"
              labelClassName="text-primary font-semibold text-xl"
              onPress={handleAdd}
            >
              +
            </TextButton>
          </View>
          <View className="flex-[50%]">
            <SolidButton onPress={handleAddToCart}>
              Add {quantity > 0 ? formatCurrency(total) : 'to Cart '}
            </SolidButton>
          </View>
        </View>
      </ContainerView>
    </View>
  );
}
