import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import MyAppointments from '../Screens/MyAppointments'
import Favorites from '../Screens/Favorites'
import Profile from '../Screens/Profile'
import NilAppointment from '../Screens/NilAppointment'
import NilFavorites from '../Screens/NilFavorites'
import NilFolder from '../Screens/NilFolder'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

const Tab = AnimatedTabBarNavigator();

const HomeTabNavigator  = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
            activeTintColor: "#fff",
            inactiveTintColor: "#6f8add",
            activeBackgroundColor:'#6f8add'
          }}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <AntDesign name="home"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
              }} />
            <Tab.Screen 
            name="Agenda" 
            component={NilAppointment} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="date" 
                size={size ? size : 18}
                color={focused ? color : "#222222"}
                focused={focused}
                color={color}/>)}} />
            <Tab.Screen 
            name="Preferiti" 
            component={NilFavorites} 
            options={{tabBarIcon: ({ focused, color, size }) =>(<Fontisto name="heart-alt" 
                size={size ? size : 18}
                color={focused ? color : "#222222"}
                focused={focused}
                color={color}/>)}} />
            <Tab.Screen 
            name="Cartella" 
            component={NilFolder} 
            options={{tabBarIcon: ({ focused, color, size }) =>(<Ionicons name="folder-outline" 
            size={size ? size : 18}
            color={focused ? color : "#222222"}
            focused={focused}
            color={color}/>)}} />
            <Tab.Screen 
            name="Profilo" 
            component={Profile} 
            options={{tabBarIcon: ({ focused, color, size })=>(<Ionicons name="person-outline" 
            size={size ? size : 18}
            color={focused ? color : "#222222"}
            focused={focused}
            color={color}/>)}} />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;
