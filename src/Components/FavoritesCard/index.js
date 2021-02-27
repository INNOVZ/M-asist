import React from 'react'
import { View, Text } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const FavoritesCard = () => {
    return (
        <View style={Styles.favoriteBox}>
            <Text style={Styles.labName}>SYN Lab</Text>
            <View style={Styles.labAddress}>
                <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                <Text style={Styles.labStreet}> Via G.Orsini 18, Milano</Text>
            </View>
        </View>
    )
}

export default FavoritesCard
