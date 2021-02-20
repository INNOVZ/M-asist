import { View, Text, SafeAreaView, ScrollView,FlatList } from 'react-native'
import React from 'react';
import TopNav from '../../Navs/TopNav'
import Styles from './style';
import SearchCard from '../../Components/SearchCard'

const LabSearch = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <TopNav/>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollArea}>
                <SearchCard/>
                <SearchCard/>
                <SearchCard/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LabSearch
