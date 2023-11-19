import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';

import { ContainerView, PhoneInput, Text, TextInput } from 'src/components';
import { SolidButton, TextButton } from 'src/components/formElements/Button';

import { useAuth } from 'src/context/AuthContext';

const ProfileScreen = () => {
  const { logout, userDetails } = useAuth();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className=" bg-red-300">
      <SafeAreaView className="flex-1 bg-white">
        <ContainerView className="flex-1 pt-8">
          <TextInput placeholder="Adnan Frimpong" label="Name" value={userDetails?.name} />
          <TextInput placeholder="pingpong98" label="Username" value={userDetails?.username} />
          <PhoneInput placeholder="812 345 6789" label="mobile" value={userDetails?.mobile} />
          <TextInput
            placeholder="adanan@example.com"
            label="Email"
            editable={false}
            value={userDetails?.email}
          />

          <SolidButton buttonclassName="mt-6">Save</SolidButton>

          <TextButton labelClassName="text-red-500" buttonclassName="my-5" onPress={logout}>
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
