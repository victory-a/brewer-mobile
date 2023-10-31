import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import { AuthProvider } from 'src/context/AuthContext';

import { RootNavigator } from 'navigation/RootNavigator';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

export default App;
