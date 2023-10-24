import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { ContainerView, PhoneInput, Text, TextInput } from 'src/components';
import { SolidButton, TextButton } from 'src/components/formElements/Button';
import { useAuth } from 'src/context/AuthContext';

const avatar = require('../../assets/icon/avatar.png');

const ProfileScreen = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <ContainerView className="flex-1 pt-6">
          <View className="mb-5 w-full items-center">
            <Image source={avatar} className="h-24 w-24 object-cover" />
          </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export { ProfileScreen };
