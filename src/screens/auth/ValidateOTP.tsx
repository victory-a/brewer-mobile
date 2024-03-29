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

import { Text, PinInput, SolidButton, TextButton, ContainerView } from 'src/components';
import { useAuthNavigationRoute } from 'src/hooks/useTypedNavigation';

import { useLogin, useValidateOTP } from 'src/lib/hooks/auth';

export function ValidateOTP() {
  const { params } = useAuthNavigationRoute();

  const timer = useCountDown(90);
  const parsedTime = parseTimeSecInMinsAndSec(timer);

  const [OTP, setOTP] = React.useState('');

  const { validateOTP, isLoading } = useValidateOTP({ setOTP, OTP });

  const { login: executeResendRequest, isLoading: isLoadingResendRequest } = useLogin({
    email: params?.email ?? '',
    isAResendOTPRequest: true
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerView>
            <Text className="mt-4 text-2xl font-semibold text-dark-lemon-green">
              Verify your account
            </Text>
            <Text className="mt-4 text-sm text-dark-lemon-green">
              Please enter the 4 digit code we sent to your email
            </Text>
            <View className="mt-8">
              <ContainerView className="w-full max-w-[260px]">
                <PinInput onChange={setOTP} inputCount={4} secureTextEntry={false} />
              </ContainerView>

              {timer > 0 ? (
                <TextButton className="mt-6" labelClassName="underline">
                  Tap here to resend OTP in {parsedTime}s
                </TextButton>
              ) : (
                <TextButton
                  className="mt-6"
                  onPress={executeResendRequest}
                  labelClassName="underline text-dark-lemon-green"
                >
                  Resend OTP
                </TextButton>
              )}
            </View>

            <SolidButton
              className="mt-8"
              onPress={validateOTP}
              disabled={OTP.length < 4}
              loading={isLoading || isLoadingResendRequest}
            >
              Confirm
            </SolidButton>
          </ContainerView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
