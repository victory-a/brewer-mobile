import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Keyboard
} from 'react-native';

import { Text } from 'src/components/shared/Text';
import { ContainerView } from 'src/components/shared/ContainerView';
import { TextInput } from 'src/components/formElements/TextInput';
import { SolidButton } from 'src/components/formElements/Button';
import Checkbox from 'src/components/formElements/Checkbox';

export const Login = () => {
  const [formValues, setFormValues] = React.useState({
    fullName: '',
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
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-12 text-2xl font-semibold text-dark-lemon-green">Login</Text>

            {/* Form Container */}
            <View className="mt-8">
              <TextInput
                label="Full Name"
                value={formValues.fullName}
                placeholder="Adan Turan"
                onChangeText={handleChange('fullName')}
                returnKeyType="next"
              />
              <TextInput
                label="Email"
                value={formValues.email}
                placeholder="adanturan@emil.com"
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
            <SolidButton className="mt-6">Register</SolidButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
