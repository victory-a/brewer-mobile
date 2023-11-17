import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Keyboard,
  Platform,
  Alert
} from 'react-native';

import { useAuthNavigation } from 'src/hooks/useTypedNavigation';
import { ContainerView, SolidButton, Text, TextInput } from 'src/components';

import { login } from 'src/lib/auth';
import useAsync from 'src/hooks/useAsync';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = () => {
  const { navigate } = useAuthNavigation();

  const [email, setEmail] = React.useState('victoryasokomeh2@gmail.com');

  const isEmailValid = emailRegex.test(email);

  const { execute, isLoading } = useAsync(
    () =>
      login({ email })
        .then(() => {
          navigate('Validate-OTP', { email });
        })
        .catch(console.log),
    false
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-12 text-2xl font-semibold text-dark-lemon-green">Login</Text>

            {/* Form Container */}
            <View className="mt-8">
              <TextInput
                label="Email"
                value={email}
                placeholder="adnan@example.com"
                onChangeText={setEmail}
                returnKeyType="done"
                keyboardType="email-address"
                autoComplete="email"
              />
            </View>

            <SolidButton
              className="mt-8"
              onPress={execute}
              disabled={!isEmailValid}
              loading={isLoading}
            >
              Login
            </SolidButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
