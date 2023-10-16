import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ContainerView } from 'src/components/shared/ContainerView';

const Completed = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ContainerView>
        <Text>Completed</Text>
      </ContainerView>
    </SafeAreaView>
  );
};

export { Completed };
