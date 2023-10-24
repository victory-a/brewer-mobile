import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ContainerView, PhoneInput, Text, TextInput } from 'src/components';
import { SolidButton, TextButton } from 'src/components/formElements/Button';
import { useAuth } from 'src/context/AuthContext';

const ProfileScreen = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ContainerView className="flex-1 pt-8">
        <TextInput value="Adnan" label="First Name" />
        <TextInput value="Frimpong" label="Last Name" />
        <PhoneInput value="812 345 6789" label="mobile" />
        <TextInput value="adanan@example.com" label="Email" editable={false} />

        <SolidButton buttonclassName="mt-6">Save</SolidButton>

        <TextButton
          labelClassName="text-red-500"
          buttonclassName="my-5"
          onPress={() => setIsAuthenticated(false)}
        >
          Sign out
        </TextButton>

        <View className="mb-3 mt-auto">
          <Text className="text-center text-zambezi">v1.0.0</Text>
        </View>
      </ContainerView>
    </SafeAreaView>
  );
};

export { ProfileScreen };
