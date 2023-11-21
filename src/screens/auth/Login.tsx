import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Keyboard,
  Platform
} from 'react-native';

import { ContainerView, SolidButton, Text, TextInput } from 'src/components';

import { useLogin } from 'src/lib/hooks/auth';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = () => {
  const [email, setEmail] = React.useState('victoryasokomeh2@gmail.com');

  const isEmailValid = emailRegex.test(email);

  const { login, isLoading } = useLogin({ email });

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
              onPress={login}
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
