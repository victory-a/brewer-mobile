import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import { AuthProvider } from 'src/context/AuthContext';

import { RootNavigator } from 'navigation/RootNavigator';
import Toast from 'react-native-toast-message';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      <Toast topOffset={60} visibilityTime={1500} />
    </>
  );
}

export default App;
