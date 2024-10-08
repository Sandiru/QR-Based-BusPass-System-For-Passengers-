import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Simulate app loading process
    setTimeout(() => {
      setIsAppReady(true);
    }, 2000); // Simulate 2 seconds delay for demonstration
  }, []);

  return (
    <>
      {isAppReady ? (
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
