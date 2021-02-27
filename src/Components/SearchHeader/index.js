import React from 'react'
import { View, Text, SafeAreaView, Pressable} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from "./style";

const SearchHeader = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.headerContainer}>
                <View style={Styles.header}>
                    <MaterialIcons style={Styles.icon} name="chevron-left" size={38} color={'#7B8FCE'}/>
                    <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('LabSearch')}>
                    <Text style={Styles.map}>Laboratorio</Text>
                    <Fontisto name="search" size={17} color={'#7B8FCE'}/>
                </Pressable>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default SearchHeader
