import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';

import useCountDown from 'hooks/useCountDown';
import { parseTimeSecInMinsAndSec } from 'utils/time';

import { Text } from 'src/components/shared/Text';
import PinInput from 'components/formElements/PinInput';
import { SolidButton, TextButton } from 'components/formElements/Button';
import { ContainerView } from 'src/components/shared/ContainerView';
import { useAuth } from 'src/context/AuthContext';

export function ValidateOTP() {
  const timer = useCountDown(60);
  const parsedTime = parseTimeSecInMinsAndSec(timer);

  const { setIsAuthenticated } = useAuth();

  const [OTP, setOTP] = React.useState('');

  function resendOTP() {}

  function handleConfirm() {
    setIsAuthenticated(true);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-4 text-2xl font-semibold text-dark-lemon-green">Enter OTP</Text>
            <Text className="mt-4 text-sm text-dark-lemon-green">
              Enter the verification code sent to your email or mobile number
            </Text>
            <View className="mt-8">
              <PinInput onChange={setOTP} inputCount={5} secureTextEntry={false} />

              {timer > 0 ? (
                <TextButton className="mt-4">Resend code {`(${parsedTime})`}</TextButton>
              ) : (
                <TextButton className="mt-4" onPress={resendOTP}>
                  Resend OTP
                </TextButton>
              )}
            </View>

            <SolidButton className="mt-8" onPress={handleConfirm}>
              Confirm
            </SolidButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
