import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  React.useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-400">Holla Holla we popping bottles</Text>
    </SafeAreaView>
  );
}

export default App;
