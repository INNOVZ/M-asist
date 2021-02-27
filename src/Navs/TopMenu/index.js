import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TopMenu = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.addressBox}>
            <MaterialIcons style={Styles.icon} name="chevron-left" size={24} color={'#7B8FCE'}/>    
                <View style={Styles.headingBox}>
                <Text style={Styles.title}>SYN lab</Text>
            </View>
            </View>
            <View>
                <MaterialIcons name="favorite-border" size={24} color={'#7B8FCE'}/>
            </View>
        </View>
    )
}

export default TopMenu
