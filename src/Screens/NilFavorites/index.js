import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import NilCard from '../../Components/NilCard'

const NilFavorites = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <NilCard heading="Nessun Preferiti" icon="heart-dislike-outline"/>
        </SafeAreaView>
    )
}

export default NilFavorites
