import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Styles from './styles'
import AppointmentsCard from '../../Components/AppointmentsCard'
import TopBar from '../../Navs/TopBar'

const MyAppointments = () => {
    return (
        <SafeAreaView >
            <TopBar/>
            <ScrollView style={Styles.scrollArea}>
                <AppointmentsCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyAppointments
