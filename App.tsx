import React from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded){
    return (
      <ActivityIndicator 
        color={theme.colors.main} 
        size='large'
      />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
