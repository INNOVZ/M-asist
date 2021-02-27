import React from 'react'
import { View, Text, Image,Pressable } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'


const SearchCard = () => {

    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View style={Styles.topArea}>
                <View style={Styles.labDetails}>
                    <Text style={Styles.labName}>SYN LAB</Text>
                    <Image source={require('../../../assets/images/synlab.png')} style={Styles.image}/>
                </View>
                <View style={Styles.labAddress}>
                    <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                    <Text style={Styles.labStreet}> Via G.Orsini 18, Milano</Text>
                </View>
                <View style={Styles.labTiming}>
                    <MaterialIcons style={Styles.icon} name="access-time"  size={18} color={'#7B8FCE'}/>
                    <Text style={Styles.labOpening}>9:00 AM -07:00 PM</Text>
                </View>
            </View>
            
            <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:15, marginBottom:15,}} />
            <View style={Styles.bottomArea}>
                <View style={Styles.bottomArea}>
                    <Text style={Styles.availability}>Prima Disponibilità : </Text>
                    <Text style={Styles.availabilityDate}>1 Mar. 2021 </Text>
                </View>
                <Pressable style={Styles.bookButton} onPress={()=>navigation.navigate('LabPage')}>
                    <Text style={Styles.bookText}>Prenota</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SearchCard
