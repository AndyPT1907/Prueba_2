import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button,  Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler'

export default function Bienvenidos({ navigation }: any) {
  return (
    <ImageBackground
      source={{uri : 'https://images.unsplash.com/photo-1594323713852-9626155bfd37?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpZW52ZW5pZGF8ZW58MHx8MHx8fDA%3D'}}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
   
    <Text> </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.touchable}>
        <Text style={styles.text}>Login</Text>
        
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.touchable}>

        <Text style={styles.text}>Registro</Text>
        
      </TouchableOpacity>


  </View>




    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
        justifyContent: 'center',
      },
      touchable: {
        backgroundColor: 'rgb(128, 0, 128)', // Puedes ajustar el color del fondo del TouchableOpacity
        padding: 10,
        borderRadius: 5,
      },
      text: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        //backgroundColor: '#ffd700', // Amarillo
        padding: 5,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
      },
      titulo: {
        fontSize: 50, // Ajusta el tamaño del texto según tus preferencias
        fontWeight: 'bold', // Puedes ajustar el peso de la fuente según tus preferencias
        color: 'white', // Ajusta el color del texto según tus preferencias
        textAlign: 'center', // Ajusta la alineación del texto según tus preferencias
      },
})