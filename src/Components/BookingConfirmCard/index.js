import React from 'react'
import { View, Text, Pressable } from 'react-native'
import TopBar from '../../Navs/TopBar';
import TobBar from "../../Navs/TopBar";
import Styles from "./styles";
const BookingConfirmCard = () => {
    return (
        <View>
            <TopBar/>
            <View style={Styles.container}>
                <View style={Styles.row}>
                    <Text style={Styles.nameField}>Name : </Text>
                    <Text style={Styles.name}>Maria Vittoria</Text>
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.nameField}>Numero cell : </Text>
                    <Text style={Styles.name}>3391282519</Text>
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.nameField}>Esame: </Text>
                    <Text style={Styles.name}>Esame Sangue</Text>
                </View>
                <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:15, marginBottom:15,}} />
                <View style={Styles.buttons}>
                    <Pressable style={Styles.changeButton} onPress={()=>console.warn('button')}>
                        <Text style={Styles.changeText}>Confirma</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default BookingConfirmCard
