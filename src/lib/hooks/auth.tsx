import React from 'react';
import { Alert } from 'react-native';
import { getUserDetails, login, updateUserDetails, validateOTP } from '../requests/auth.request';

import useAsync from 'src/hooks/useAsync';
import { useAuthNavigation, useAuthNavigationRoute } from 'src/hooks/useTypedNavigation';
import { getToken, setToken } from 'src/utils/auth';
import { IUpdateUser } from 'src/model/auth';
import { useAuth } from 'src/context/AuthContext';
import { addNGCountryCode } from 'src/utils/phone';

interface IuseLogin {
  email: string;
  isAResendOTPRequest?: boolean;
  clearOTP: () => void;
}

export function useLogin({ email, isAResendOTPRequest = false, clearOTP }: IuseLogin) {
  const { navigate } = useAuthNavigation();

  const { execute, isLoading } = useAsync(() =>
    login({ email })
      .then(() => {
        if (isAResendOTPRequest) {
          Alert.alert('Success', 'OTP has been sent to your email');
          clearOTP();
        } else {
          navigate('Validate-OTP', { email });
        }
      })
      .catch((err) => {
        Alert.alert('Error', err.message);
      })
  );

  return { login: execute, isLoading };
}

interface IuseValidateOTP {
  OTP: string;
  setOTP: (val: string) => void;
}

export function useValidateOTP({ setOTP, OTP }: IuseValidateOTP) {
  const { params } = useAuthNavigationRoute();
  const { setUserDetails } = useAuth();

  const { execute, isLoading } = useAsync(() =>
    validateOTP({ email: params?.email ?? '', otp: OTP })
      .then(async (res) => {
        await setToken(res.data.token);
        setUserDetails(res.data.user);
      })
      .catch((err) => {
        setOTP('');
        Alert.alert('Error', err.message);
      })
  );

  return { validateOTP: execute, isLoading };
}

export function useValidateCurrentUser() {
  const { setUserDetails, removeUserFromStorage } = useAuth();
  const [firstAttempt, setFirstAttempt] = React.useState(true);

  const { execute, isLoading } = useAsync(async () => {
    const token = await getToken();
    if (token) {
      getUserDetails()
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch(removeUserFromStorage)
        .finally(() => setFirstAttempt(false));
    } else {
      setFirstAttempt(false);
    }
  });

  return {
    validateCurrentUser: execute,
    isLoading,
    firstAttempt
  };
}

export function useUpdateUser(userDetails: Partial<IUpdateUser>) {
  const { validateCurrentUser, isLoading: isRefetchingUser } = useValidateCurrentUser();

  const payload = { ...userDetails };

  if (userDetails.mobile) {
    payload.mobile = addNGCountryCode(userDetails.mobile);
  }

  const { execute, isLoading } = useAsync(() =>
    updateUserDetails(payload)
      .then(validateCurrentUser)
      .catch((err) => Alert.alert('Error', err.message))
  );

  return {
    updateUser: execute,
    isLoading: isLoading || isRefetchingUser
  };
}
