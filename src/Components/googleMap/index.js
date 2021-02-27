import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from './styles'

const GoogleMap = () => {
    return (
        <View style={Styles.mapContainer}>
            <MapView 
                style={{padding:0, margin:0, width:'100%', height:'100%', borderRadius:15,}}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
                <Marker coordinate={{latitude: 37.78825,longitude: -122.4324}}>
                    <View style={Styles.labMarker}>
                        <Fontisto name="map-marker-alt" size={17} style={Styles.icon} color={'#fff'}/>
                        <Text style={Styles.labName}>SYN lab</Text>
                    </View>
                </Marker>
            </MapView>
        </View>
    )
}

export default GoogleMap
