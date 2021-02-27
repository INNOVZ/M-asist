import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Styles from './styles'
import BookingsCard from '../../Components/BookingsCard'
import TopBar from '../../Navs/TopBar'

const MyAppointments = () => {
    return (
        <SafeAreaView >
            <TopBar/>
            <ScrollView style={Styles.scrollArea}>
                <BookingsCard/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyAppointments
