import React, {useState} from 'react'
import { View, Text,ImageBackground, Pressable, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native'
import HomeSearch from '../../Components/HomeSearch'
import Styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';


const Home = () => {

    const [lab, setLab] = useState(true)
    // const [click, setSlick] = useState(1)

    const SelectLabs = ()=>{
        setLab(true)
        // setClick(1)
    }
    const SelectHospital = ()=>{
        setLab(false)
        // setClick(0.7)
    }

    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.1, y: 0.5}} colors={['#7B8FCE', '#6881CE']} style={Styles.headerArea}>
                <View>
                    <Text style={Styles.welcomeUser}>Ciao Maria</Text>
                    <Text style={Styles.welcomeMessage}>Voui Prenotare un Appuntamento?</Text>
                
                    <View style={Styles.service}>
                        
                        <TouchableHighlight>
                            <Pressable style={Styles.selectButtons} onPress={SelectLabs}>
                                <FontAwesome style={Styles.icon} name="heartbeat" size={18} color={'#7B8FCE'}/>
                                <Text style={Styles.testName}>Laboratorio</Text>
                            </Pressable>
                        </TouchableHighlight>
                        <Pressable >
                            <Pressable style={Styles.selectButtons} onPress={SelectHospital}>
                                <MaterialIcons style={Styles.icon} name="local-hospital" size={18} color={'#7B8FCE'}/>
                                <Text style={Styles.testName}>Ospedale</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
                <View style={Styles.selectionArea}>
                    
                </View>
                <Pressable style={Styles.searchBox} onPress={()=> navigation.navigate('PlaceSearch')}>
                    <Text style={Styles.map}>Dove?</Text>
                    <Fontisto name="map-marker-alt" size={17} color={'#7B8FCE'}/>
                </Pressable>
            </LinearGradient>
            {lab? 
                <HomeSearch searchTitle="Cerca Laboratorio"/>
                :<HomeSearch searchTitle="Cerca Ospedale"/>
            }
        </View>
    )
}

export default Home
