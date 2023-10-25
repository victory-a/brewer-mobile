import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Keyboard,
  Platform
} from 'react-native';

import { useAuthNavigation } from 'src/hooks/useTypedNavigation';

import { Checkbox, ContainerView, SolidButton, Text, TextInput } from 'src/components';

export const Login = () => {
  const { navigate } = useAuthNavigation();

  const [formValues, setFormValues] = React.useState({
    username: '',
    email: '',
    rememberUser: false
  });

  function handleChange(field: string) {
    return (value: string | number | boolean) => {
      setFormValues((current) => ({ ...current, [field]: value }));
    };
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-12 text-2xl font-semibold text-dark-lemon-green">Login</Text>

            {/* Form Container */}
            <View className="mt-8">
              <TextInput
                label="Username"
                value={formValues.username}
                placeholder="Adnan"
                onChangeText={handleChange('username')}
                returnKeyType="next"
              />
              <TextInput
                label="Email"
                value={formValues.email}
                placeholder="adanan@example.com"
                onChangeText={handleChange('email')}
                returnKeyType="done"
                keyboardType="email-address"
              />
              <Checkbox
                rightText="Remember me"
                onClick={() => handleChange('rememberUser')(!formValues.rememberUser)}
                isChecked={formValues.rememberUser}
              />
            </View>

            <SolidButton className="mt-6" onPress={() => navigate('Validate-OTP')}>
              Login
            </SolidButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
