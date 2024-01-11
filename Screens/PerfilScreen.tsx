import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../config/Config';


export default function PerfilScreen() {

// Ejemplo para Firestore


const getFirestoreData = async () => {
  const user = auth().currentUser;
  if (user) {
    try {
      const userDoc = await getFirestoreData().collection('usuarios').doc(user.uid).get();
      console.log('Datos de Firestore:', userDoc.data());
    } catch (error) {
      console.error('Error al obtener datos de Firestore', error);
    }
  } else {
    console.warn('No hay usuario autenticado');
  }
};




  return (

    <ImageBackground source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/594/518/desktop-wallpaper-fondos-de-pantalla-abstractos-para-celular-neon-water.jpg' }}
    style={styles.backgroundImage}
    
    >
    <View style={styles.container}>
      <Text style={styles.title} >Perfil</Text>
    </View>
    <Image source={{ uri: '' }}
    style={styles.image}
    />

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
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
  },


})