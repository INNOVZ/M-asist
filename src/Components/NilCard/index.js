import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const NilCard = ({heading, icon}) => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.circle}>
                <Ionicons style={Styles.icon} name={icon} size={32} color={'#fff'}/>    
            </View>
            <Text style={Styles.heading}>{heading}</Text>
        </SafeAreaView>
    )
}

export default NilCard
