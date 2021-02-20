import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import Styles from "./style";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const TopNav = () => {
    return (
        <View style={Styles.container}>
            
            
            <View style={Styles.addressBox}>
            <MaterialIcons style={Styles.icon} name="chevron-left" size={24} color={'#7B8FCE'}/>     
            
                <View style={Styles.headingBox}>
                <Text style={Styles.title}>Covid Test</Text>
            </View>
            </View>
            <View>
                <MaterialIcons name="sort" size={24} color={'#7B8FCE'}/>
            </View>
            
        </View>
    )
}

export default TopNav
