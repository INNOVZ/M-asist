import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from "./src/Screens/Home";
import LabSearch from "./src/Screens/LabSearch";

export default function App() {
  return (
    <>
    <StatusBar/>
    <View >
     <LabSearch/>
    </View>
    </>
  );
}



