import React, { PropsWithChildren } from 'react';
import { IUser } from 'src/model/auth';

interface ContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userDetails: null | IUser;
  setUserDetails: React.Dispatch<React.SetStateAction<null | IUser>>;
  logout: () => void;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

function AuthProvider(props: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState<null | IUser>(null);

  function logout() {
    setIsAuthenticated(false);
    setUserDetails(null);
  }

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, userDetails, setUserDetails, logout }}
      {...props}
    />
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
