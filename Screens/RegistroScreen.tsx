import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/Config';
import { ref, update } from "firebase/database";

export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nick, setNick] = useState('');
  const [edad, setEdad] = useState('');

  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;

        
        const userRef = ref(db, `usuarios/${correo.replace(/\./g, '_')}`);
        update(userRef, {
          nick: nick,
          edad: edad,
        })

        console.log("REGISTRO CORRECTO");
        
        Alert.alert('Registro exitoso', '¡Bienvenido! Has sido registrado correctamente.');
        navigation.navigate('Login');
        
        setCorreo('');
        setContrasenia('');
        setNick('');
        setEdad('');
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/weak-password':
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
            break;
          case 'auth/email-already-in-use':
            Alert.alert('Error', 'El correo electrónico ya está registrado. Por favor, inicia sesión o utiliza otro correo.');
            break;
          default:
            Alert.alert('Error', 'Ocurrió un error durante el registro');
            break;
        }
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese email'
        onChangeText={(texto) => setCorreo(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese un nick"
        onChangeText={(texto) => setNick(texto)}
      />
       <TextInput
        style={styles.input}
        placeholder="Edad"
        onChangeText={(texto) => setEdad(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingrese contraseña'
        onChangeText={(texto) => setContrasenia(texto)}
        secureTextEntry={true}
      />
      
     

      <Button title='Registrarse' onPress={() => registro()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cambiado el color de fondo
    padding: 20, // Añadido espacio de relleno
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold', // Añadido negrita
    color: '#333', // Cambiado el color del texto
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc', // Cambiado el color del borde
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff', // Añadido color de fondo
  },
});
