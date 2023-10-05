import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Keyboard
} from 'react-native';

import { useAuthNavigation } from 'src/hooks/useTypedNavigation';

import { Text } from 'src/components/shared/Text';
import { ContainerView } from 'src/components/shared/ContainerView';
import { TextInput } from 'src/components/formElements/TextInput';
import { SolidButton, TextButton } from 'src/components/formElements/Button';
import { PhoneInput } from 'src/components/formElements/PhoneInput';

export const Register = () => {
  const { navigate } = useAuthNavigation();

  const [formValues, setFormValues] = React.useState({
    fullName: '',
    email: '',
    mobile: ''
  });

  function handleChange(field: string) {
    return (value: string | number) => {
      setFormValues((current) => ({ ...current, [field]: value }));
    };
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-12 text-2xl font-semibold text-dark-lemon-green">Register</Text>

            {/* Form Container */}
            <View className="mt-8">
              <TextInput
                label="Full Name"
                value={formValues.fullName}
                placeholder="Adan Turan"
                onChangeText={handleChange('fullName')}
                returnKeyType="done"
              />
              <PhoneInput
                label="Phone Number"
                value={formValues.mobile}
                placeholder="+234 812 345 6789"
                onChangeText={handleChange('mobile')}
                returnKeyType="done"
              />
              <TextInput
                label="Email"
                value={formValues.email}
                placeholder="adanturan@emil.com"
                onChangeText={handleChange('email')}
                returnKeyType="done"
                keyboardType="email-address"
              />
            </View>
            <SolidButton className="mt-6" onPress={() => navigate('Validate-OTP')}>
              Register
            </SolidButton>
            <TextButton onPress={() => navigate('Login')} className="mt-8">
              Already have an account? Login
            </TextButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
