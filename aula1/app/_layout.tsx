import { Stack } from 'expo-router';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 
  const [loaded, error] = useFonts({
    Antom: require('../assets/fonts/Anton-Regular.ttf'),
    aaa: Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
      </Stack>
    </>
  );

};

const styles = StyleSheet.create ({

});