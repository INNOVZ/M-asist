import React, {useState} from 'react';
import {View} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Styles from "./styles";
import PlaceList from '../PlaceList'

const GooglePlacesInput = () => {

  const [inputPlace, setInputPlace] = useState('');

  return (
    <View style={Styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Dove?'
      onPress={(data , details = null) => {
        // se
      }}
      styles={{
        textInput: Styles.testInput,
        textInputContainer:Styles.testContainer,

        poweredContainer: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderBottomRightRadius: 5, 
          borderBottomLeftRadius: 5,
          borderColor: '#c8c7cc',
          borderTopWidth: 0.5,
        },
        powered: {},
        listView: {
          width:'93%',
          marginTop:10,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          borderTopEndRadius:10,
          borderTopStartRadius:10,
          overflow:'scroll'
        },
        row: {
          backgroundColor: '#FFFFFF',
          padding: 13,
          height: 44,
          flexDirection: 'row',
        },
        separator: {
          height: 0.5,
          backgroundColor: '#c8c7cc',
        },
        description: {},
        loader: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: 20,
      },
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