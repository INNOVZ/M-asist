import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TopBar = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.addressBox}>
            <MaterialIcons style={Styles.icon} name="chevron-left" size={24} color={'#7B8FCE'}/>    
                <View style={Styles.headingBox}>
                <Text style={Styles.title}>Appointments</Text>
            </View>
            </View>
            
        </View>
    )
}

export default TopBar