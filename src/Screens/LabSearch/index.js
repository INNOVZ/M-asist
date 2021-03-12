import React from 'react'
import { View, Text,SafeAreaView, Pressable } from 'react-native'
import Styles from './styles'
import SearchHeader from '../../Components/SearchHeader';
import SearchResultTabNav from "../../Navs/SearchResultTabNav";
import LabsList from '../../Components/LabsList'

const LabSearch = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <SearchHeader/>
        </SafeAreaView>
    )
}

export default LabSearch
