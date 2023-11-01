import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';

import { ContainerView, PhoneInput, Text, TextInput } from 'src/components';
import { SolidButton, TextButton } from 'src/components/formElements/Button';

import { useAuth } from 'src/context/AuthContext';

const ProfileScreen = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className=" bg-red-300">
      <SafeAreaView className="flex-1 bg-white">
        <ContainerView className="flex-1 pt-8">
          <TextInput placeholder="Adnan Frimpong" label="Name" value="" />
          <TextInput value="pingpong98" label="Username" />
          <PhoneInput value="812 345 6789" label="mobile" />
          <TextInput value="adanan@example.com" label="Email" editable={false} />

          <SolidButton buttonclassName="mt-6">Save</SolidButton>

          <TextButton
            labelClassName="text-red-500"
            buttonclassName="my-5"
            onPress={() => setIsAuthenticated(false)}
          >
            Logout
          </TextButton>

          <View className="mb-3 mt-auto">
            <Text className="text-center text-zambezi">v1.0.0</Text>
          </View>
        </ContainerView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export { ProfileScreen };
