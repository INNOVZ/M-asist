import React from 'react'
import { View, Text } from 'react-native'
import SearchHeader from '../../Components/SearchHeader'
import LabsList from '../../Components/LabsList'
import TopNav from '../../Navs/TopNav'

const TestSearch = () => {
    return (
        <View>
            <TopNav/>
            <LabsList/>
        </View>
    )
}

export default TestSearch
