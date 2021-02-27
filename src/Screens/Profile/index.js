import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import Styles from './styles'
import TopNav from '../../Navs/TopNav'

const Profile = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <TopNav/>
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
        </SafeAreaView>
    )
}

export default Profile
