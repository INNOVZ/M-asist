import React, {useState} from 'react'
import { View, Text, SafeAreaView, Pressable, TextInput, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Styles from "./style";

const SearchHeader = ({labName, search}) => {
    return (
            <View style={Styles.headerContainer}>
                <View style={Styles.searchBox}>
                    <TextInput style={Styles.input}  placeholder={labName} onChangeText={search}/>
                    <TouchableOpacity style={Styles.clear}>
                        <Fontisto name="search" size={20} color={'#6f8add'} />
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default SearchHeader
