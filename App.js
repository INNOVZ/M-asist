import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
import Router from './src/Navs/Router'
import { AppLoading } from 'expo'
import 'react-native-gesture-handler' 

export default function App() {

  const [loaded] = useFonts({
    Poppins1: require('./assets/fonts/Poppins-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  
  return (
    <>
    <StatusBar style="light" barStyle="light-content" translucent={true}/>
    <Router />
    </> 
  )
}



