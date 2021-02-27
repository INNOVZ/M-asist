import React from 'react';
import {View} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Styles from "./styles";
import PlaceList from '../PlaceList'

const GooglePlacesInput = () => {
  return (
    <View style={Styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Dove?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{
        textInput: Styles.testInput,
        textInputContainer:Styles.testContainer
      }}
      suppressDefaultStyles
      query={{
        key: 'AIzaSyCM_8t5fZCMIYLXVvhlEyfvronkk7fZ9kM',
        language: 'en',
      }}
    />
    </View>
  );
};

export default GooglePlacesInput;