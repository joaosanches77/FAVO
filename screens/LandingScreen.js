import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Keyboard,TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {auth, database} from './config/firebase';
import { collection, getDocs } from "firebase/firestore";
import HomeScreen from './HomeScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import places from "./config/places"
import {TextInput} from "react-native-paper"


function LandingScreen ({ navigation } ) {

  

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [text, setText] = useState('');
const [passwordVisible, setPasswordVisible] = useState(true);


useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      navigation.replace("Home")
    }
  })
  return unsubscribe
}, [])


const Login = () => {

  signInWithEmailAndPassword(auth, email, password)
  .then((re) => {
    const user = auth.currentUser;
  })
  .catch((error) => {
    Alert.alert('Email ou palavra-passe errados!')
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
        <View style={styles.Text}>
        <Text style={styles.Text}>Bem-vindo</Text>
        </View>
        <StatusBar style="auto" />
        <TextInput
        selectionColor='#1C5C3D'
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
        />
        <TextInput
        selectionColor='#1C5C3D'
        style={styles.input}
      label="Password"
      secureTextEntry={passwordVisible}
      value={password}
      onChangeText={text => setPassword(text)}
      right={
        <TextInput.Icon
          name={passwordVisible ? "eye" : "eye-off"}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      }
      />
       <View style={styles.ButtonEntrar}>
        <Text style={styles.ButtonEntrar} onPress= {Login}>Entrar</Text>
  </View>
  <View style={styles.ButtonsBottom} >
  
    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.ButtonCriarconta}>
      <Text style={styles.TextCriarC} >Criar conta</Text>
  </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.ButtonConvidado}>
      <Text style={styles.TextEntarC} >Entrar como convidado</Text>
  </TouchableOpacity>
  </View>
</SafeAreaView>
</TouchableWithoutFeedback>

    );
    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      
    },
    input: {
      height: 45,
      margin: 5,
      marginLeft: 50,
      marginRight: 50,
      justifyContent: 'center',
      borderBottomColor: '#1C5C3D',
      borderBottomWidth: 1,
      backgroundColor:'rgba(0,0,0,0)',
      
    },
    Text: {
      textAlign: 'center',
      marginBottom: 60,
      marginTop: 70,
      fontSize: 45,
      color: '#1C5C3D',
    },
    ButtonEntrar: {
        color: '#1C5C3D',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1C5C3D',
      },
    ButtonCriarconta: {
      
      color: '#1C5C3D',
      height: 40,
      borderColor:'#1C5C3D',
      borderWidth: 1,
      borderRadius: 50,
      justifyContent: 'center', 
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 10,
      width: 300,
      marginTop: 150,
      marginLeft: 50,
      marginRight: 50,
    },
    ButtonConvidado: {
      height: 40,
      backgroundColor: '#1C5C3D',
      borderColor:'#1C5C3D',
      borderWidth: 1,
      borderRadius: 50,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 10,
      width: 300,
      marginLeft: 50,
      marginRight: 50,
    },
    TextCriarC: {
      color: '#1C5C3D',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
    TextEntarC: {
      color: '#FFFFFF',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
    ButtonsBottom: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
  
  });
    

export default LandingScreen;