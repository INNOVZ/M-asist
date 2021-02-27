import React from 'react'
import { View, Text, Image,Pressable } from 'react-native'
import Styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const BookingsCard = () => {
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
                <View style={Styles.testDetails}>
                    <Text style={Styles.test}>Essame : </Text>
                    <Text style={Styles.testName}>Ecografia</Text>
                </View>
                <View style={Styles.labTiming}>
                    <Text style={Styles.test}>Data : </Text>
                    <Text style={Styles.labOpening}>1 Marzo 2021 alle 03:00 PM</Text>
                </View>
            </View>
            <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:15, marginBottom:15,}} />
            <View style={Styles.bottomArea}>
                <View >
                    
                </View>
                <View style={Styles.buttons}>
                    <Pressable style={Styles.changeButton} onPress={()=>console.warn('button')}>
                        <Text style={Styles.changeText}>Cambia</Text>
                    </Pressable>
                    <Pressable style={Styles.cancelButton} onPress={()=>console.warn('button')}>
                        <Text style={Styles.cancelText}>Cancella</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default BookingsCard
