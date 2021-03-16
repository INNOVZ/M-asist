import React ,{useState} from 'react'
import { View, Text,ScrollView, FlatList, SafeAreaView } from 'react-native'
import TopNav from '../../Navs/TopNav'
import FavoritesCard from "../../Components/FavoritesCard";
import Styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import TopBar from '../../Navs/TopBar';

const Favorites = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <TopNav/>
            <View style={Styles.scrollArea}>
                <FavoritesCard />
            </View>
        </SafeAreaView>
    )
}

export default Favorites
