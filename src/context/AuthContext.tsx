import React, { PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import { IUser } from 'src/model/auth';
import { deleteToken } from 'src/utils';
import { displayToast } from 'src/utils/toast';

interface ContextProps {
  userDetails: null | IUser;
  setUserDetails: React.Dispatch<React.SetStateAction<null | IUser>>;
  removeUserFromStorage: () => void;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

function AuthProvider(props: PropsWithChildren) {
  const [userDetails, setUserDetails] = React.useState<null | IUser>(null);

  async function removeUserFromStorage() {
    try {
      await deleteToken();
      setUserDetails(null);
    } catch (error) {
      console.error(error);
      displayToast({ type: 'error', message: 'Failed to logout' });
    }
  }

  return (
    <Context.Provider value={{ userDetails, setUserDetails, removeUserFromStorage }} {...props} />
  );
}

function useAuth() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an Auth Provider');
  }

  return context;
}

export { AuthProvider, useAuth };
