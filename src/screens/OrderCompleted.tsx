import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ContainerView, SolidButton, Text, TextButton } from 'src/components';
import { TickIcon } from 'src/components/Icons';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';

export const OrderCompleted = () => {
  const { navigate } = useAppNavigation();

  return (
    <SafeAreaView className="flex-1">
      <ContainerView className="mt-16 flex-1 items-center">
        <TickIcon />
        <Text className="mt-3 text-xl font-semibold text-secondary">Order Completed</Text>
        <Text className="text-center text-sm text-secondary ">
          Thank you for trusting us with {'\n'}your Coffee needs
        </Text>

        <View className="mb-2 mt-auto w-full">
          <SolidButton className="mb-5">View Order</SolidButton>

          <TextButton
            onPress={() => navigate('AppBottomTabs')}
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
