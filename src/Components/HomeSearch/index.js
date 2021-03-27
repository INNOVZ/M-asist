import React, {useState} from 'react'
import { View, Text, ScrollView, Pressable, Modal,TouchableOpacity } from 'react-native'
import Styles from './style'
import TestsSearchButton from '../TestSearchButton'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import Tests from '../../../assets/Data/Tests'
import LabSearchModal from '../LabSearchModal'

const HomeSearch = ({searchTitle}) => {
    
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={{height:650}}>
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
                        <LabSearchModal input='inputLab' />
                       
                        <TouchableOpacity style={Styles.searchButton} onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={Styles.searchText}>Cancella</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </Modal>

            <Pressable style={Styles.searchBox} onPress={() => setModalVisible(true)}>
                <Text style={Styles.map}>{searchTitle}</Text>
                <Fontisto name="search" size={17} color={'#7B8FCE'}/>
            </Pressable>
            {/* <SearchModal/> */}
            {/* <Text style={Styles.searchHeader}>Cerci un Essame</Text> */}
            <View style={Styles.row}>
            {Tests.map(test => 
                <TestsSearchButton key={test.id} testName={test.test}/>
                )}
            </View>
        </View>
    )
}

export default HomeSearch
