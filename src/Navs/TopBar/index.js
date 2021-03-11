import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TopBar = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.box}>
            <MaterialIcons style={Styles.icon} name="chevron-left" size={32} color={'#7B8FCE'}/>    
                <View style={Styles.headingBox}>
                <Text style={Styles.title}>Appointments</Text>
            </View>
            </View>
            
        </SafeAreaView>
    )
}

export default TopBar