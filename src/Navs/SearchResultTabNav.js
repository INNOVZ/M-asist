import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LabsList from '../Components/LabsList';
import GoogleMap from '../Components/GoogleMap';

const Tab = createMaterialTopTabNavigator();

function SearchResultTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={LabsList}  />
      <Tab.Screen name="Mappa" component={GoogleMap} />
    </Tab.Navigator>
  );
}

export default SearchResultTabNav
 