import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ContainerView, SolidButton, Text, TextButton } from 'src/components';
import { TickIcon } from 'src/components/Icons';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { formatCurrency } from 'src/utils/amount';

export const OrderCompleted = () => {
  const { navigate } = useAppNavigation();

  return (
    <SafeAreaView className="flex-1">
      <ContainerView className="mt-16 flex-1 items-center">
        <TickIcon />
        <Text className="mt-3 text-xl font-semibold text-secondary">Order Completed</Text>
        <Text className="text-center text-sm text-secondary ">
          Thank you for trusting us. {'\n'}We hope to see you again 😉
        </Text>

        <View className="mt-10 w-[200]">
          <Text className="text-center text-base font-semibold text-secondary">Summary</Text>
          <View className="mt-2 flex-row items-center justify-between">
            <Text>Price</Text>
            <Text>{formatCurrency(4.53)}</Text>
          </View>
          <View className="mt-2 w-full flex-row items-center justify-between">
            <Text>Delivery </Text>
            <Text className="text-secondary">{formatCurrency(1.0)}</Text>
          </View>
          <View className="mt-2 w-full flex-row items-center justify-between">
            <Text className="font-semibold ">Total </Text>
            <Text className="font-semibold  text-secondary">{formatCurrency(5.53)}</Text>
          </View>
        </View>
        <View className="mb-2 mt-auto w-full">
          <SolidButton className="mb-5">View Order</SolidButton>

          <TextButton
            onPress={() => navigate('Home')}
            className="bg-transparent"
            labelClassName="text-secondary"
            hitSlop={2}
          >
            Back home
          </TextButton>
        </View>
      </ContainerView>
    </SafeAreaView>
  );
};
