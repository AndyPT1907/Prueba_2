import { Button, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function InicioScreen(navigation : any) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
  
    function login() {
      signInWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("Drawer_Bienvenida");
          setCorreo('');
          setContrasenia('');
        })
        .catch((error) => {
          const errorCode = error.code;
  
          switch (errorCode) {
            case "auth/invalid-credential":
              Alert.alert("Error", "Credenciales incorrectas");
              break;
  
            case "auth/missing-password":
              Alert.alert("Error", "Ingrese su contraseña");
              break;
  
            default:
              Alert.alert("Error", "Ingrese sus credenciales");
              break;
          }
        });
    }
  
    return (
      <ImageBackground
        source={{ uri: 'https://png.pngtree.com/background/20210711/original/pngtree-teaching-scene-english-class-blackboard-background-material-picture-image_1135237.jpg' }}
        style={styles.backgroundImage}
      > 
      <View style={styles.container}>
          <Text style={styles.title}>Iniciar Sesión</Text>
  
          <TextInput
            style={styles.input}
            placeholder='Ingresar email'
            keyboardType='email-address'
            onChangeText={(texto: any) => setCorreo(texto)}
            value={correo}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Ingresar contraseña"
            onChangeText={(texto: any) => setContrasenia(texto)}
            value={contrasenia}
            secureTextEntry={true}
          />
  
          <Button title='Ingresar' onPress={() => login()} />
  
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.registerText}>👉 Regístrate aquí 👈</Text>
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
        
        padding: 20,
      },
      title: {
        fontSize: 50,
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
      }
})