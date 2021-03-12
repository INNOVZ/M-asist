import React from 'react'
import { View, Text, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from './style'

const TestSelect = ({testName}) => {  
    const navigation = useNavigation();

    return (
        <View>
            <Pressable style={Styles.testButtons} onPress={()=> navigation.navigate('TestSearch')}>
                    <Text style={Styles.testName}>{testName}</Text>
            </Pressable>
        </View>
    )
}

export default TestSelect
