import React from 'react'
import { View, Text } from 'react-native'
import LabList from "../Components/LabsList";
import GoogleMap from "../Components/GoogleMap";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNav = (props) => {

    return (
        
        <Tab.Navigator>
            <Tab.Screen name="List" component={LabList} />
            <Tab.Screen name="Map" component={GoogleMap} />
        </Tab.Navigator>
    )
}

export default SearchResultTabNav
 