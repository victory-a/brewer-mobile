import React from 'react';

interface ContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

function AuthProvider(props: Props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  return <Context.Provider value={{ isAuthenticated, setIsAuthenticated }} {...props} />;
}

function useAuth() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an Auth Provider');
  }

  return context;
}

export { AuthProvider, useAuth };
