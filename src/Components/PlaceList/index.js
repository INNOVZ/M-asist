import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from './styles'
import GoogleAutoComplete from '../GoogleAutoComplete'

const PlaceList = ({item}) => {
    return (
        <Pressable style={Styles.place}>
                <Fontisto name="map-marker-alt" size={17} style={Styles.icon} color={'#7B8FCE'}/>
                <Text style={Styles.placeName}>{item}</Text>
        </Pressable>
        )
}

export default PlaceList
