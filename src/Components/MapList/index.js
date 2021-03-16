import React from 'react'
import { View, Text, Image,Pressable } from 'react-native'
import Styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'
import LabPage from '../../Screens/LabPage'


const MapList = (props) => {

    const lab=props.lab

    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View style={Styles.topArea}>
                <View style={Styles.labDetails}>
                    <Text style={Styles.labName}>{lab.name}</Text>
                    {/* <Image source={{logo}} style={Styles.image}/> */}
                </View>
                <View style={Styles.labAddress}>
                    <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                    <Text style={Styles.labStreet}> {lab.address}</Text>
                </View>
                <View style={Styles.labTiming}>
                    <MaterialIcons style={Styles.icon} name="access-time"  size={18} color={'#7B8FCE'}/>
                    <Text style={Styles.labOpening}>{lab.timing}</Text>
                </View>
            </View>
            
            <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:15, marginBottom:15,}} />
            <View style={Styles.bottomArea}>
                <View style={Styles.bottomArea}>
                    <Text style={Styles.availability}>Prima Disponibilità : </Text>
                    <Text style={Styles.availabilityDate}>29 Mar. 2021 </Text>
                </View>
                <Pressable style={Styles.bookButton} onPress={()=>navigation.navigate('LabPage')}>
                    <Text style={Styles.bookText}>Prenota</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default MapList
