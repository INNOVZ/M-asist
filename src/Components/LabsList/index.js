import { View, Text, SafeAreaView, ScrollView,FlatList } from 'react-native'
import React from 'react';
import TopNav from '../../Navs/TopNav'
import Styles from './style';
import SearchCard from '../SearchCard'
import Feeds from '../../../assets/Data/Feed'
import SearchResult from '../SearchResult'


const LabsList = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollArea}>
                <SearchResult/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LabsList
