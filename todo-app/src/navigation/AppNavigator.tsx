import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import UserListScreen from '../screens/UserListScreen';
import RegisterScreen from '../screens/RegisterScreen';  // Import RegisterScreen

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />  
                <Stack.Screen name="UserList" component={UserListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
