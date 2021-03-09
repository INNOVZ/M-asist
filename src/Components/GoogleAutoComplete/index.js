import React, {useState} from 'react';
import {View} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Styles from "./styles";
import PlaceList from '../PlaceList'

const GooglePlacesInput = () => {

  const [inputText, setInputText] = useState('');

  return (
    <View style={Styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Dove?'
      onPress={(data , details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{
        textInput: Styles.testInput,
        textInputContainer:Styles.testContainer
      }}
      currentLocation={true}
      currentLocationLabel='Current location'

      suppressDefaultStyles
      query={{
        key: 'AIzaSyCM_8t5fZCMIYLXVvhlEyfvronkk7fZ9kM',
        language: 'en',
      }}
      // renderRow={(data) => <PlaceList item={data}/> }
    />
    </View>
  );
};

export default GooglePlacesInput;