import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'


const MapMarker = ({coordinate, name,isSelected, onPress}) => {
    return (
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={{
                backgroundColor:isSelected?'#7B8FCE':'#676767',
                borderRadius:15,
                width:20,
                height:20,
                alignItems:'center',
                justifyContent:'center',
            }}>
                <Fontisto name="map-marker-alt" size={10} style={Styles.icon} color={'#fff'}/>
                {/* <Text style={Styles.labName}>SYN lab</Text> */}
            </View>
        </Marker>
    )
}

export default MapMarker
