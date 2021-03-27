import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import Styles from './styles'
import MainscreenNav from '../../Navs/MainScreenNav' 
import NilCard from '../../Components/NilCard'

const Profile = () => {
    return (
        <View style={Styles.container}>
            <MainscreenNav pageTitle="Profilo" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.userArea}>
                    <NilCard icon="person-add-outline"/>
                    <View style={Styles.buttons}>
                        <Pressable style={Styles.loginButton} onPress={()=>console.warn('button')}>
                            <Text style={Styles.loginText}>Log in</Text>
                        </Pressable> 
                        <Pressable style={Styles.signupButton} onPress={()=>console.warn('button')}>
                            <Text style={Styles.signupText}>Sign up</Text>
                        </Pressable> 
                    </View> 
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={Styles.profileMenus}>

                <Text style={Styles.menu}>FAQ</Text>
                <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:5, marginBottom:15,}} />
                <Text style={Styles.menu}>Privacy Policy</Text>
                <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:5, marginBottom:15,}} />
                <Text style={Styles.menu}>Termina e Condizione</Text>
                <View style={{ borderBottomColor: '#7B8FCE',borderBottomWidth: 1, marginTop:5, marginBottom:15,}} />
                <Text style={Styles.menu}>Scrivi un Recessione</Text>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default Profile
