import React from 'react'
import { View, Text,ImageBackground, Pressable, TouchableHighlight } from 'react-native'
import HomeSearch from '../../Components/HomeSearch'
import Styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.1, y: 0.5}} colors={['#7B8FCE', '#6881CE']} style={Styles.headerArea}>
                <View>
                    <Text style={Styles.welcomeUser}>Ciao Maria</Text>
                    <Text style={Styles.welcomeMessage}>Voui Prenotare un Appuntamento?</Text>
                
                    <View style={Styles.service}>
                        <Pressable style={Styles.selectButtons} onPress={()=> navigation.navigate('TestSearch')}>
                            <FontAwesome style={Styles.icon} name="heartbeat" size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.testName}>Laboratorio</Text>
                        </Pressable>
                        <Pressable style={Styles.selectButtons} onPress={()=> navigation.navigate('TestSearch')}>
                            <MaterialIcons style={Styles.icon} name="local-hospital" size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.testName}>Ospedale</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={Styles.selectionArea}>
                    
                </View>
                <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('PlaceSearch')}>
                    <Text style={Styles.map}>Dove?</Text>
                    <Fontisto name="map-marker-alt" size={17} color={'#7B8FCE'}/>
                </Pressable>
            </LinearGradient>

            <HomeSearch/>

        </View>
    )
}

export default Home
