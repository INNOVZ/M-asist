import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import NilCard from '../../Components/NilCard'
import MainscreenNav from '../../Navs/MainScreenNav'

const NilFolder = () => {
    return (
        <View style={Styles.container}>
            <MainscreenNav pageTitle="Cartella" />
            <NilCard heading="Cartella è vuoto" icon="md-folder-open-outline"/>
        </View>
    )
}

export default NilFolder
