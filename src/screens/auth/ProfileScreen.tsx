import React from 'react';
import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';

import { ContainerView, PhoneInput, Text, TextInput } from 'src/components';
import { SolidButton, TextButton } from 'src/components/formElements/Button';

import { useAuth } from 'src/context/AuthContext';
import { useUpdateUser } from 'src/lib/hooks/auth';
import { logoutUser } from 'src/lib/requests/auth';
import { stripNGCountryCode } from 'src/utils/phone';

const ProfileScreen = () => {
  const { removeUserFromStorage, userDetails } = useAuth();
  const [formValues, setFormValues] = React.useState({
    name: userDetails?.name,
    username: userDetails?.username,
    mobile: stripNGCountryCode(userDetails?.mobile)
  });

  function handleChange(key: keyof typeof formValues) {
    return (value: string) => setFormValues((curr) => ({ ...curr, [key]: value }));
  }

  const { updateUser, isLoading } = useUpdateUser(formValues);

  function handleLogout() {
    logoutUser()
      .then(removeUserFromStorage)
      .catch((err) => {
        console.error(err);
        Alert.alert('Failed to logout');
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className=" bg-red-300">
      <SafeAreaView className="flex-1 bg-white">
        <ContainerView className="flex-1 pt-8">
          <TextInput
            placeholder="Adnan Frimpong"
            label="Name"
            value={formValues?.name}
            onChangeText={handleChange('name')}
          />
          <TextInput
            placeholder="pingpong98"
            label="Username"
            value={formValues?.username}
            onChangeText={handleChange('username')}
          />
          <PhoneInput
            placeholder="812 345 6789"
            label="Mobile"
            value={formValues?.mobile}
            onChangeText={handleChange('mobile')}
          />
          <TextInput
            placeholder="adanan@example.com"
            label="Email"
            editable={false}
            value={userDetails?.email}
          />

          <SolidButton buttonclassName="mt-6" onPress={updateUser} loading={isLoading}>
            Save
          </SolidButton>

          <TextButton labelClassName="text-red-500" buttonclassName="my-5" onPress={handleLogout}>
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
