import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegistroScreen from '../Screens/RegistroScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

import BienvenidaScreen from '../Screens/BienvenidaScreen';
import PerfilScreen from '../Screens/PerfilScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InicioScreen from '../Screens/InicioScreen';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={InicioScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Drawer_Bienvenida" component={MyDrawer} />
           
        </Stack.Navigator>
    );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Bienvenido' >
        <Drawer.Screen name="Bienvenido" component={BienvenidaScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Stack_Welcome" component={MyStack} />
        
    </Drawer.Navigator>
  );
}











export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})