import React from 'react'
import { View, Text } from 'react-native'
import SearchHeader from '../../Components/SearchHeader'
import LabsList from '../../Components/LabsList'
import TopNav from '../../Navs/TopNav'
import SearchResultTabNav from '../../Navs/SearchResultTabNav'

const TestSearch = () => {
    return (
        <View>
            <TopNav/>
            <SearchResultTabNav/>
        </View>
    )
}

export default TestSearch
