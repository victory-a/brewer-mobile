import { Alert } from 'react-native';
import { getUserDetails, login, updateUserDetails, validateOTP } from '../requests/auth';

import useAsync from 'src/hooks/useAsync';
import { useAuthNavigation, useAuthNavigationRoute } from 'src/hooks/useTypedNavigation';
import { getToken, setToken } from 'src/utils/auth';
import { IUpdateUser } from 'src/model/auth';
import { useAuth } from 'src/context/AuthContext';
import { addNGCountryCode } from 'src/utils/phone';

interface IuseLogin {
  email: string;
  isAResendOTPRequest?: boolean;
}

export function useLogin({ email, isAResendOTPRequest = false }: IuseLogin) {
  const { navigate } = useAuthNavigation();

  const { execute, isLoading } = useAsync(
    () =>
      login({ email })
        .then(() => {
          if (isAResendOTPRequest) {
            Alert.alert('Success', 'OTP has been sent to your email');
          } else {
            navigate('Validate-OTP', { email });
          }
        })
        .catch((err) => {
          Alert.alert('Error', err.message);
        }),
    false
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

  const { execute, isLoading } = useAsync(
    () =>
      validateOTP({ email: params?.email ?? '', otp: OTP })
        .then(async (res) => {
          await setToken(res.data.token);
          setUserDetails(res.data.user);
        })
        .catch((err) => {
          setOTP('');
          Alert.alert('Error', err.message);
        }),
    false
  );

  return { validateOTP: execute, isLoading };
}

export function useValidateCurrentUser() {
  const { setUserDetails, removeUserFromStorage } = useAuth();

  const { execute, isLoading } = useAsync(async () => {
    const token = await getToken();
    if (token) {
      getUserDetails()
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch(removeUserFromStorage);
    }
  }, false);

  return {
    validateCurrentUser: execute,
    isLoading
  };
}

export function useUpdateUser(userDetails: Partial<IUpdateUser>) {
  const { validateCurrentUser, isLoading: isRefetchingUser } = useValidateCurrentUser();

  const payload = { ...userDetails };

  if (userDetails.mobile) {
    payload.mobile = addNGCountryCode(userDetails.mobile);
  }

  const { execute, isLoading } = useAsync(
    () =>
      updateUserDetails(payload)
        .then(validateCurrentUser)
        .catch((err) => Alert.alert('Error', err.message)),
    false
  );

  return {
    updateUser: execute,
    isLoading: isLoading || isRefetchingUser
  };
}
