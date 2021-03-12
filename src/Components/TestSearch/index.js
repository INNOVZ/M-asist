import React from 'react'
import { View, Text, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from './styles'

const TestsSearch = ({testName}) => {  
    const navigation = useNavigation();

    return (
        <View>
            <Pressable style={Styles.testButtons} onPress={()=> navigation.navigate('TestSearch')}>
                    <Text style={Styles.testName}>{testName}</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={'#fff'}/>
            </Pressable>
        </View>
    )
}

export default TestsSearch
