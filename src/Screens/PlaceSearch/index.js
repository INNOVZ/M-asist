import React, {useState} from 'react'
import { View, Text,SafeAreaView, Pressable, TextInput, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from './styles'
import PlaceList from '../../Components/PlaceList'
import GooglePlacesInput from '../../Components/GoogleAutoComplete'

const PlaceSearch = () => {

    const [place, setPlace] = useState('')

    return (
        
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <MaterialIcons style={Styles.icon} name="chevron-left" size={38} color={'#7B8FCE'}/>
                <GooglePlacesInput/>
            </View>
        </SafeAreaView>
    )
}

export default PlaceSearch
