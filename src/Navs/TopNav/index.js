import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Styles from "./styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const TopNav = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.box}>
            <MaterialIcons style={Styles.icon} name="chevron-left" size={32} color={'#7B8FCE'}/>    
                <View style={Styles.headingBox}>
                <Text style={Styles.title}>Covid Test</Text>
            </View>
            </View>
            <View>
                <MaterialIcons name="sort" size={24} color={'#7B8FCE'}/>
            </View>
            
        </SafeAreaView>
    ) 
}

export default TopNav
