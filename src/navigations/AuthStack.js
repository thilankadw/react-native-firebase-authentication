import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default AuthStack;
