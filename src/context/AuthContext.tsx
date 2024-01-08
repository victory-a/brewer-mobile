import React, { PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import { logoutUser } from 'src/lib/requests/auth';
import { IUser } from 'src/model/auth';
import { deleteToken } from 'src/utils/auth';

interface ContextProps {
  userDetails: null | IUser;
  setUserDetails: React.Dispatch<React.SetStateAction<null | IUser>>;
  logout: () => void;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

function AuthProvider(props: PropsWithChildren) {
  const [userDetails, setUserDetails] = React.useState<null | IUser>(null);

  async function logout() {
    try {
      await logoutUser();
      await deleteToken();
      setUserDetails(null);
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to logout');
    }
  }

  return <Context.Provider value={{ userDetails, setUserDetails, logout }} {...props} />;
}

function useAuth() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an Auth Provider');
  }

  return context;
}

export { AuthProvider, useAuth };
