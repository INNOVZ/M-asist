import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback , Keyboard} from 'react-native'
import SearchHeader from '../SearchHeader'
import Styles from './styles'

const LabSearchModal = () => {

  const [labSearch, setLabSearch] = useState('Cerca un Laboratorio')

    const searchLab = (val) => {
        setLabSearch(val);
        console.log(val)
    }
    
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={Styles.container}>
      <SearchHeader labName={labSearch} search={searchLab} />
      <Text>{labSearch}</Text>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default LabSearchModal
