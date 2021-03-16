import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Feeds from '../../../assets/Data/Feed'
import SearchCard from '../SearchCard'

const SearchResult = () => {
    return (
        <View>
           <FlatList data={Feeds}
                     renderItem={({item})=><SearchCard lab={item}/>} /> 
        </View>
    )
}

export default SearchResult
