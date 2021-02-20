import React from 'react'
import { View, Text, Image,Pressable } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const SearchCard = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.topArea}>
                <Text style={Styles.name}>SYN LAB</Text>
                <View>
                <Image source={require('../../../assets/images/synlab.png')} style={Styles.image}/>
                </View>
            </View>
            <View style={Styles.topArea}>
                <Text style={Styles.timing}>Orari Aperti :</Text>
                <View>
                
                </View>
            </View>
            <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:15, marginBottom:15,}} />
            <View style={Styles.bottomArea}>
                <View style={Styles.bottomArea}>
                    <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                    <Text style={Styles.address}>Via V. Orsini 18, 20157</Text>
                </View>
                <Pressable style={Styles.bookButton} onPress={()=>console.warn('button')}>
                    <Text style={Styles.bookText}>Prenota</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SearchCard
