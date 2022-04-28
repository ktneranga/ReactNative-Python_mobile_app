import React from 'react';
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import Home from '../components/Home';
import Create from '../components/Create';
import Details from '../components/Details';
import Edit from '../components/Edit';
import Login from '../components/Login'; 

const Stack = createStackNavigator();

const Navigator = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='Login'
                component={Login}
                />
                <Stack.Screen 
                name = "Home"
                component = {Home}
                />
                <Stack.Screen 
                name = "Create"
                component = {Create}
                />
                <Stack.Screen 
                name = "Details"
                component = {Details}
                />
                <Stack.Screen
                name="Edit"
                component={Edit}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;