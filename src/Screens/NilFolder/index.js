import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import NilCard from '../../Components/NilCard'

const NilFolder = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <NilCard heading="Cartella è vuoto" icon="md-folder-open-outline"/>
        </SafeAreaView>
    )
}

export default NilFolder
