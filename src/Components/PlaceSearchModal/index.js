import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SearchHeader from '../SearchHeader'
import GooglePlacesInput from '../GoogleAutoComplete'
import Styles from './styles'

const PlaceSearchModal = () => {

  const [placeSearch, setPlaceSearch] = useState('Dove ?')

    const searchLab = (val) => {
        setLabSearch(val);
        console.log(val)
    }

  return (
    <View style={Styles.container}>
      <GooglePlacesInput/>
      
      
    </View>
  )
}

export default PlaceSearchModal
