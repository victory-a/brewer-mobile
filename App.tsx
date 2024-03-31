import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import ErrorBoundary from 'react-native-error-boundary';
import Toast from 'react-native-toast-message';

import { AuthProvider } from 'src/context/AuthContext';

import { RootNavigator } from 'navigation/RootNavigator';
import { FallbackComponent } from 'src/components/ErrorBoundary';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      <Toast topOffset={60} visibilityTime={1500} />
    </ErrorBoundary>
  );
}

export default App;
