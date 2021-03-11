import React from 'react'
import { View, Text,ImageBackground, Pressable, TouchableHighlight } from 'react-native'
import HomeSearch from '../../Components/HomeSearch'
import Styles from './style'
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
                </View>
                <View style={Styles.selectionArea}>
                    <View style={Styles.service}>
                        <TouchableHighlight style={Styles.selectService} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
                            <Fontisto name="map-marker-alt" size={28} color={'#7B8FCE'}/>
                        </TouchableHighlight>
                        <Text style={Styles.serviceTitle}>Laboratorio</Text>
                    </View>
                    <View style={Styles.service}>
                        <TouchableHighlight style={Styles.selectService} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
                            <Fontisto name="map-marker-alt" size={28} color={'#7B8FCE'}/>
                        </TouchableHighlight>
                        <Text style={Styles.serviceTitle}>Ospadale</Text>
                    </View>
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
