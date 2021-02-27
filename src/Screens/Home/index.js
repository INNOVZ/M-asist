import React from 'react'
import { View, Text,ImageBackground, Pressable, ScrollView } from 'react-native'
import Styles from './style'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import TestsButtons from '../../Components/TestsButton'

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.1, y: 0.5}} colors={['#7B8FCE', '#6881CE']} style={Styles.headerArea}>
                <View>
                <Text style={Styles.welcomeUser}>Ciao Martina</Text>
                <Text style={Styles.welcomeMessage}>Voui Prenotare un Appuntamento?</Text>
                </View>
                <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('PlaceSearch')}>
                    <Text style={Styles.map}>Dove?</Text>
                    <Fontisto name="map-marker-alt" size={17} color={'#7B8FCE'}/>
                </Pressable>
            </LinearGradient>
            <ScrollView style={Styles.scrollArea}>
            
            <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('LabSearch')}>
                <Text style={Styles.map}>Cerca un Laboratorio</Text>
                <Fontisto name="search" size={17} color={'#7B8FCE'}/>
            </Pressable>
            {/* <Text style={Styles.searchHeader}>Cerci un Essame</Text> */}
            <View style={Styles.row}>
                <TestsButtons testName="Esame Sangue"/>
                <TestsButtons testName="Ecografia"/>
                <TestsButtons testName="Torace"/>
                <TestsButtons testName="Radiologia"/>
                <TestsButtons testName="Torace"/>
            </View>
            </ScrollView>
        </View>
    )
}

export default Home
