import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import NilCard from '../../Components/NilCard'
import MainScreenNav from '../../Navs/MainScreenNav'

const NilFavorites = () => {
    return (
        <View style={Styles.container}>
            <MainScreenNav pageTitle="Preferiti" />
            <NilCard heading="Nessun Preferiti" icon="heart-dislike-outline"/>
        </View>
    )
}

export default NilFavorites
