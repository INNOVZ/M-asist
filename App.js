import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// import * as Font from 'expo-font'
import Home from "./src/Screens/Home";
import LabsList from "./src/Components/LabsList";
import LabPage from "./src/Screens/LabPage";
import MyAppointments from './src/Screens/MyAppointments';
import Favorites from './src/Screens/Favorites'
import Profile from './src/Screens/Profile'
import BookingConfirm from './src/Screens/BookingConfirm'
import Router from './src/Navs/Router'
// import { AppLoading } from 'expo'
import 'react-native-gesture-handler' 

// const getFonts= () =>{
//   return Font.loadAsync({
//     'Poppins-Black':require('./assets/fonts/Poppins-Black.ttf'),
//     'Poppins-Bold':require('./assets/fonts/Poppins-Bold.ttf'),
//     'Poppins-ExtraBold':require('./assets/fonts/Poppins-ExtraBold.ttf'),
//     'Poppins-Light':require('./assets/fonts/Poppins-Light.ttf'),
//     'Poppins-Medium':require('./assets/fonts/Poppins-Regular.ttf'),
//     'Poppins-Regular':require('./assets/fonts/Poppins-ExtraLight.ttf'),
//   })
// }

export default function App() {
  
  return (
    <>
    <StatusBar/>
    <Router/>
    </> 
  )
}



