import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Font from 'expo-font' ;

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Montserrat: require('C:/Users/khushi/Desktop/Real Estate/realest/Montserrat-VariableFont_wght.ttf'), // Replace with the correct font file path
      });
    }

    loadFonts();
  }, []);

  const handleLogin = () => {
    // Handle login logic here
    // You can access the phone number and password from the state
    // and perform authentication or navigate to another screen.
    alert('Login button pressed');
  };

  const handleSignUp = () => {
    // Handle navigation to the sign-up page or any other action
    // you want to take when the "Sign Up" link is pressed.
    alert('Sign Up link pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => this.setState({ phoneNumber: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => this.setState({ password: text })}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpLink}>New user? Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  //white background
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',  
    fontWeight: 'bold',
  },
  signUpLink: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});