import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ContainerView } from 'src/components/shared/ContainerView';

const Ongoing = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ContainerView>
        <Text>Ongoing</Text>
      </ContainerView>
    </SafeAreaView>
  );
};

export { Ongoing };
