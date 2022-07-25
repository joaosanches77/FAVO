import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,TextInput,Keyboard,TouchableWithoutFeedback, Dimensions,Modal,Pressable,TouchableOpacity } from 'react-native';
import { auth } from './config/firebase';
import {getAuth, signOut, currentUser} from "firebase/auth";



function UnderConstruction({navigation}) {

  const user = auth.currentUser
 

  const Logoff = () => {
      signOut(auth)
      .then((userCredential) => {
        navigation.replace("Landing")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    
    if (user !== null) {

  const email = user.email
  const name = user.displayName
  
    return (
        <SafeAreaView >
        <View style={{ alignItems:'flex-end', marginRight:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{ marginTop: 10 }}
              source={require("../assets/botaosair.png")}
            ></Image>
          </TouchableOpacity>
    
        </View>
        <View style={styles.Text}>
        <Text style={styles.Text}>Estamos a trabalhar nesta página</Text>
        <Text style={styles.Name}>{name} </Text>
        <Image source={require('../assets/Constru.png')}
        style={{
          width:150,
          height:150
        }}
        ></Image>
        <Text onPress={Logoff} style={styles.TerminarSessao}>Terminar Sessão</Text>
        </View>
        </SafeAreaView>
    );
    }
    else{
      return (
        <SafeAreaView >
        <View style={{ alignItems:'flex-end', marginRight:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{ marginTop: 10}}
              source={require("../assets/botaosair.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.Text}>
        <Text style={styles.Text}>Estamos a trabalhar nesta página </Text>

        <Image source={require('../assets/Constru.png')}
         style={{
          width:150,
          height:150
         }}
          ></Image>
        <Text onPress={Logoff} style={styles.TerminarSessao}>Entrar ou Criar conta</Text>
        </View>
        </SafeAreaView>
    );
    }
}

const styles = StyleSheet.create({

    Text: {
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 50,
      marginHorizontal: 10,
      fontSize: 35,
      color: '#1C5C3D',
      justifyContent:'center',
      alignItems:'center',
      
    },
    Retroceder: {
        textAlign: 'left',
        marginLeft: 50,
        marginTop: 20,
        color: '#1C5C3D',
        fontSize: 17,
      },

      TerminarSessao: {
        textAlign: 'center',
        marginTop: 60,
        color: '#1C5C3D',
        fontSize: 20,
      },

      Line: {
        width: 75,
        height: 4,
        backgroundColor:'#808080',
        alignSelf:'center',
        marginVertical: 15,
        marginHorizontal: 50,
        borderRadius: 2,
      },
      Name: {
        textAlign: 'center',
        marginBottom: 80,
        marginHorizontal: 10,
        fontSize: 35,
        color: '#1C5C3D',
        justifyContent:'center',
        alignItems:'center',
        
      },
      
}
);

export default UnderConstruction;