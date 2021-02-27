import React from 'react'
import { View, Text, ScrollView,SafeAreaView, Image, Dimensions,Pressable } from 'react-native'
import TopMenu from '../../Navs/TopMenu'
import Styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TestsButton from "../../Components/TestsButton";
import GoogleMap from '../../Components/googleMap'
 
const LabPage = () => {
    return (
        <SafeAreaView>
            <TopMenu/>
            <ScrollView style={Styles.scrollArea}>
                <Image source={require('../../../assets/images/synlabim.png')}></Image>
                <View style={Styles.container}>
                    <View style={Styles.addressBox}>
                        <View style={Styles.address}>
                        <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.info}> Via V. Orsini 18, 20157</Text>
                        </View>
                        <View style={Styles.address}>
                            <MaterialIcons style={Styles.icon} name="phone"  size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.info}>3391282519</Text>
                        </View>
                    </View>
                    <View style={Styles.tests}>
                        <Text style={Styles.availableTests}>Esame Disponibile</Text>
                        <View style={Styles.row}>
                            <TestsButton testName= "Ecografia"/>
                            <TestsButton testName= "Torace"/>
                        </View>
                    </View>
                    <View style={Styles.map}>
                    <GoogleMap/>
                </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default LabPage
