import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import NilCard from '../../Components/NilCard'

const NilAppointment = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <NilCard heading="No Appointments" icon="md-book-outline"/>
        </SafeAreaView>
    )
}

export default NilAppointment
