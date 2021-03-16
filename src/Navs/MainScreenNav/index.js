import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TopBar = ({pageTitle}) => {
    return (
        <View style={Styles.container}>
            <View >
                <View style={Styles.box}>
                    <View style={Styles.headingBox}>
                       <Text style={Styles.title}>{pageTitle}</Text>
                </View>
                </View>
            </View>
            
        </View>
    )
}

export default TopBar