import React from 'react'
import { View, Text,SafeAreaView, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from './styles'
import SearchHeader from '../../Components/SearchHeader';
import SearchResultTabNav from "../../Navs/SearchResultTabNav";

const LabSearch = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <SearchHeader/>
            <SearchResultTabNav />
        </SafeAreaView>
    )
}

export default LabSearch
