import React from 'react'
import { View, Text,ScrollView, FlatList } from 'react-native'
import TopNav from '../../Navs/TopNav'
import FavoritesCard from "../../Components/FavoritesCard";
import Styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Favorites = () => {
    return (
        <View style={Styles.container}>
            <TopNav/>
            <View style={Styles.scrollArea}>
                <FavoritesCard />
            </View>
        </View>
    )
}

export default Favorites
