import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from 'navigation/RootNavigator';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <RootNavigator />
    </>
  );
}

export default App;
