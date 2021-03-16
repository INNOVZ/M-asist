import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import Styles from './styles'
import TopNav from '../../Navs/TopNav'
import MainscreenNav from '../../Navs/MainScreenNav' 

const Profile = () => {
    return (
        <View style={Styles.container}>
            <MainscreenNav pageTitle="Profilo" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.loginButtons}>
                    <Pressable style={Styles.loginButton} onPress={()=>console.warn('button')}>
                    <Text style={Styles.loginText}>Log in</Text>
                    </Pressable> 
                    <Pressable style={Styles.signupButton} onPress={()=>console.warn('button')}>
                    <Text style={Styles.signupText}>Sign up</Text>
                    </Pressable>  
                </View>
                <View style={Styles.profileMenus}>

                <Text style={Styles.menu}>FAQ</Text>
                <Text style={Styles.menu}>Privacy Policy</Text>
                <Text style={Styles.menu}>Termina e Condizione</Text>
                <Text style={Styles.menu}>Scrivi un Recessione</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile
