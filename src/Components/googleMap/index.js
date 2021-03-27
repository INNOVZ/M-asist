import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Places from '../../../assets/Data/Feed'
import MapMarker from '../MapMarker'
import PlaceList from '../PlaceList';
import SearchCard from '../SearchCard'
import Styles from './styles'

const GoogleMap = (props) => {
    
    const [selectLab, setSelectLab] = useState('')

    return (
        <View style={Styles.mapContainer}>
            <MapView 
                style={{padding:0, margin:0, width:'100%', height:'100%', borderRadius:15,}}
                initialRegion={{
                latitude: 43.26472831393275,  
                longitude:11.996593884019733,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
            >
                {Places.map(place => 
                <MapMarker coordinate={place.coordinate} 
                           name ={place.name}
                           isSelected={place.id === selectLab}
                           onPress={()=>setSelectLab(place.id)} />
                )}
            </MapView>
            {/* <View style={{position:'absolute', bottom:10}}>
                <FlatList  data={Places} renderItem={({item})=><SearchCard lab={item}/>} />
            </View> */}
        </View>
    )
}

export default GoogleMap
