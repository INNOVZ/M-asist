import React from 'react'
import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import Styles from './styles'
import MainscreenNav from '../../Navs/MainScreenNav'
import NilCard from '../../Components/NilCard'

const NilAppointment = ({}) => {
    return (
        <View style={Styles.container}>
            <MainscreenNav pageTitle="Appuntamenti"/>
            <NilCard heading="No Appointments" icon="md-book-outline"/>
        </View>
    )
}

export default NilAppointment
