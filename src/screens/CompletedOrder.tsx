import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ContainerView } from 'src/components';

const CompletedOrder = () => {
  return (
    <SafeAreaView className="flex-1">
      <ContainerView>
        <Text>Completed</Text>
      </ContainerView>
    </SafeAreaView>
  );
};

export { CompletedOrder };
