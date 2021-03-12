import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import Styles from './style'
import TestsSearch from '../TestSearch'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'

const HomeSearch = ({searchTitle}) => {
    const navigation = useNavigation();

    return (
        <ScrollView style={Styles.scrollArea}>
             
            <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('LabSearch')}>
                <Text style={Styles.map}>{searchTitle}</Text>
                <Fontisto name="search" size={17} color={'#7B8FCE'}/>
            </Pressable>
            {/* <Text style={Styles.searchHeader}>Cerci un Essame</Text> */}
            <View style={Styles.row}>
                <TestsSearch testName="Esame Sangue"/>
                <TestsSearch testName="Ecografia"/>
                <TestsSearch testName="Torace"/>
                <TestsSearch testName="Radiologia"/>
                <TestsSearch testName="Torace"/>
            </View>
            </ScrollView>
    )
}

export default HomeSearch
