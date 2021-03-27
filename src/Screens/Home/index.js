import React, {useState} from 'react'
import {View, Text, Pressable, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, ScrollView, Modal } from 'react-native'
import HomeSearch from '../../Components/HomeSearch'
import Styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient';
import PlaceSearchModal from '../../Components/PlaceSearchModal'

const Home = ({userName="Maria"}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const [place, setPlace] = useState('Dove ?')

    return (
        <View style={Styles.container}>

            <Modal
                animationType="slide"
                // transparent={true}
                visible={modalVisible}
                presentationStyle="formSheet"
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                }}>
                    <View >
                        <View >
                            <PlaceSearchModal/>
                            
                            <TouchableOpacity style={Styles.searchButton} onPress={() => setModalVisible(!modalVisible)} >
                                <Text style={Styles.searchText}>Cancella</Text>
                            </TouchableOpacity >
                        </View>
                    </View>
                </Modal>

            <LinearGradient start={{x: 0.2, y: 0}} end={{x: 0.3, y: 0.5}} colors={['#6e85ce', '#6f8add']} style={Styles.headerArea}>
                <View>
                    <Text 
                        style={Styles.welcomeUser}>
                        Ciao {userName}</Text>
                    <Text style={Styles.welcomeMessage}>Voui Prenotare un Appuntamento?</Text>
                
                
                </View>
                <View style={Styles.selectionArea}>
                    
                </View>
                <Pressable style={Styles.searchBox} onPress={() => setModalVisible(true)}>
                    <Text style={Styles.mapInput}>{place}</Text>
                    <Fontisto name="map-marker-alt" size={17} color={'#7B8FCE'}/>
                </Pressable>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.scrollArea}>
                <HomeSearch searchTitle="Cerca Ospedale"/>
            </ScrollView>
        </View>
    )
}


export default Home
