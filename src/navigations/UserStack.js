import React from 'react'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default UserStack;
