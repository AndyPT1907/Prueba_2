import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BienvenidaScreen(navigation : any) {
  return (
    <ImageBackground source={{ uri: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg' }}
    style={styles.backgroundImage}>

    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido Nuevamente</Text>
      <Text> </Text>
      <Text style={styles.parrafo}> 
¡Bienvenido/a a nuestra aplicación! Estamos emocionados/as de tenerte con nosotros/as. Aquí encontrarás un espacio diseñado para facilitar tu experiencia y hacer que cada momento sea memorable. Explora todas las funciones y descubre cómo esta aplicación puede mejorar tu vida. Siempre estamos trabajando para brindarte lo mejor, así que si tienes alguna sugerencia o comentario, no dudes en hacérnoslo saber. ¡Disfruta de tu estancia y gracias por elegirnos!</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Stack_Welcome')} style={styles.touchable}>

        <Text style={styles.text}>Salir</Text>
        
      </TouchableOpacity>
      <Button title='Salir' onPress={()=>navigation.navigate('Stack_Welcome')}/>
    
    </ImageBackground>
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'Italic',
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
    justifyContent: 'center',
  },
  parrafo: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: 'white', 
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
  touchable: {
    backgroundColor: 'rgb(128, 0, 128)', // Puedes ajustar el color del fondo del TouchableOpacity
    padding: 10,
    borderRadius: 5,
  }
})