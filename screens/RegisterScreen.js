import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button,Keyboard,TouchableWithoutFeedback,TouchableOpacity, Alert, ScrollView } from 'react-native';
import { KeyboardAwareScrollView, enableOnAndroid } from 'react-native-keyboard-aware-scroll-view'
import {auth, database} from './config/firebase';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { addDoc,setDoc, doc, collection } from "firebase/firestore";
import {TextInput} from "react-native-paper"





function RegisterScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(true);
  //const alertsCollectionRef = doc(database, "alerts/");
  
  //const crtAlert = async () => {
    //const user = auth.currentUser
     //await setDoc(alertsCollectionRef), {
      //user: name ,
      //id: uid,
      //lat: '321',
      //long: '3424',
      //tittle:'Perigo',
      //Description:'Muito lixo',
      //Data: '21/07/2022'
    //}
   
  //};
  


 const Register = () =>{

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log({name})
    }).catch((error) => {
      console.log(error)
      Alert.alert('Preeencha todos os campos corretamente!')
    });
    sendEmailVerification(auth.currentUser)
  . then  (async (userCredential) => {
    const user = auth.currentUser
    Alert.alert('Email de confirmação enviado! Verifique o seu Email')
    await setDoc(doc(database, 'users/' + user.uid), {
      phone: phone,
      name: name,
      email:email,
    });
  }).catch((error) => {
    console.log(error)
    Alert.alert('Preeencha todos os campos corretamente!')
  });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert('Preeencha todos os campos corretamente!')
    // ..
    
  });
}


   
    return (
      <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutoAutomaticScrol='true'
        keyboardOpeningTime={0}
        
      >
       
        <ScrollView style={styles.container}>
          
          <View style={styles.Text}>
        <Text onPress={() => navigation.goBack()} style={styles.Retroceder}>Retroceder</Text>
        </View>
        <View style={styles.Text}>
        <Text style={styles.Text}>Registo</Text>
        </View>
       
        <StatusBar style="auto" />
        
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telemóvel"
          value={phone}
          onChangeText={text => setPhone(text)}
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
        
        <View style={styles.ButtonsBottom}>
        <TouchableOpacity onPress={Register}>
  <View style={styles.ButtonConvidado}>
  <Text style={styles.TextEntarC}>Registar</Text>
  </View>
  </TouchableOpacity>
  
  </View>
  
  </ScrollView>
  </KeyboardAwareScrollView>
  </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      
    },
    Retroceder: {
      textAlign: 'left',
      marginLeft: 50,
      marginTop: 60,
      color: '#1C5C3D',
      fontSize: 17,
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
      marginTop: 10,
      fontSize: 45,
      color: '#1C5C3D',
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
      marginTop: 100,
      width: 300,
      marginLeft: 50,
      marginRight: 50,
    },
    TextCriarC: {
      color: '#1C5C3D',
    },
    TextEntarC: {
      color: '#FFFFFF',
    },
    ButtonsBottom: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
  
  });
    
export default RegisterScreen;