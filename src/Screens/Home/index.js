import React from 'react'
import { View, Text,ImageBackground, Pressable } from 'react-native'
import Styles from './style'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = () => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../../assets/images/Home.png')} style={Styles.image}>
            <Pressable style={Styles.searchBox}>
                <Text style={Styles.map}>Dove ?</Text>
                <Fontisto name="map-marker-alt" size={17} color={'#7B8FCE'}/>
            </Pressable>
            <Pressable style={Styles.searchBox}>
                <Text style={Styles.lab}>Cerci Laborotari ?</Text>
                <Fontisto name="search" size={17} color={'#7B8FCE'}/>
            </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Home
