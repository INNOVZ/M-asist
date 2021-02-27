import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import MyAppointments from '../Screens/MyAppointments'
import Favorites from '../Screens/Favorites'
import Profile from '../Screens/Profile'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{tabBarIcon:({color:string})=>(<Fontisto name="home" size={17} color={'#7B8FCE'}/>)}} />
            <Tab.Screen 
            name="Agenda" 
            component={MyAppointments} 
            options={{tabBarIcon:({color:string})=>(<Fontisto name="date" size={17} color={'#7B8FCE'}/>)}} />
            <Tab.Screen 
            name="Favorites" 
            component={Favorites} 
            options={{tabBarIcon:({color:string})=>(<Fontisto name="heart-alt" size={17} color={'#7B8FCE'}/>)}} />
            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{tabBarIcon:({color:string})=>(<MaterialIcons name="person-outline" size={17} color={'#7B8FCE'}/>)}} />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;
