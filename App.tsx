import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from 'navigation/RootNavigator';
import { AuthProvider } from 'src/context/AuthContext';

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
