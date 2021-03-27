import React, {useState} from 'react'
import { View, Text,SafeAreaView, Pressable, TextInput, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from './styles'
import PlaceList from '../../Components/PlaceList'
import GooglePlacesInput from '../../Components/GoogleAutoComplete'
import LabsList from '../../Components/LabsList'
const PlaceSearch = () => {

    const [place, setPlace] = useState('')

    return (
        
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <GooglePlacesInput/>
            </View>
            <PlaceList/>
        </SafeAreaView>
    )
}

export default PlaceSearch
