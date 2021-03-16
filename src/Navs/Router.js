import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Screens/Home'
import MyAppointments from '../Screens/MyAppointments'
import Favorites from '../Screens/Favorites'
import Profile from '../Screens/Profile'
import HomeTabNavigator from './HomeTabNavigator'
import PlaceSearch from "../Screens/PlaceSearch";
import LabSearch from '../Screens/LabSearch'
import TestsSearch from "../Screens/TestsSearch";
import LabList from '../Components/LabsList'
import SearchScreen from "../Screens/PlaceSearch";
import LabPage from "../Screens/LabPage";
import SearchResult from '../Navs/SearchResultTabNav'
import GoogleMap from '../Components/GoogleMap'
import HomeSearch from '../Components/HomeSearch'

const Stack = createStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeTabNavigator} options={{headerShown:false}}/>
                <Stack.Screen name="My Appointments" component={MyAppointments} options={{headerShown:false}}/>
                <Stack.Screen name="Favorites" component={Favorites} options={{headerShown:false}}/>
                <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
                <Stack.Screen name="PlaceSearch" component={PlaceSearch} options={{headerShown:false}}/>
                <Stack.Screen name="LabSearch" component={LabSearch} options={{headerShown:false}}/>
                <Stack.Screen name="TestSearch" component={TestsSearch} options={{headerShown:false}}/>
                <Stack.Screen name="LabList" component={LabList} options={{headerShown:false}}/>
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
                <Stack.Screen name="LabPage" component={LabPage} options={{headerShown:false}}/>
                <Stack.Screen name="GoogleMap" component={GoogleMap} options={{headerShown:false}}/>
                <Stack.Screen name="SearchResult" component={SearchResult} options={{title:"Essame Sangue"}}/>
            </Stack.Navigator>
           
        </NavigationContainer>
    )
}

export default Router
