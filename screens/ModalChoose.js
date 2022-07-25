import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Modal,Pressable, Alert, KeyboardAvoidingView,ScrollView,Dimensions,Keyboard} from "react-native";
import { Card, TextInput } from "react-native-paper";
import {auth, database} from './config/firebase';
import { addDoc,setDoc, doc, collection } from "firebase/firestore";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import places from "./config/places"
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { KeyboardAwareScrollView, enableOnAndroid } from 'react-native-keyboard-aware-scroll-view'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const { height: SCREENHEIGHT } = Dimensions.get('window');
const { width: SCREENWIDTH } = Dimensions.get('window');

function ModalChose({choose, setChoose,crtAlert, setCrtAlert, setCrtEvent, crtEvent}) {


   function OpenAlert() {
        setChoose(false)
        setCrtAlert(true)
    }  

    function OpenEvent() {
        setChoose(false)
        setCrtEvent(true)
    }  



return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
<Modal
transparent= {true}
animationType='fade'
visible={choose}
onRequestClose={() => setChoose(false)
} 
>
  <Card
        style={{
          marginTop:0,
          height: SCREENHEIGHT,
          width: SCREENWIDTH,
          borderRadius: 30,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          justifyContent:'center',
          alignContent:'center',
          //alignItems:'center',
        }}
      >
  <View style={styles.modal}>
    <View>
        <TouchableOpacity onPress={OpenEvent}>
        <Image 
            style={{ marginTop: 7, height:80, width:80, }}
            source={require("../assets/EventBtn.png")}>

        </Image>
        </TouchableOpacity>
    </View>
     
    <View>
        <TouchableOpacity onPress={OpenAlert} >
        <Image 
            style={{ marginTop: 7, height:80, width:80, }}
            source={require("../assets/AlertBtn.png")}>

        </Image>
        </TouchableOpacity>
    </View>
  </View>
  <View>
  <TouchableOpacity onPress={() => setChoose(false)}>
    <Image
            style={styles.buttonClose}
            source={require("../assets/Close.png")}
          ></Image>
          </TouchableOpacity>
    </View>
  </Card>
</Modal> 
</TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
    modal:{
     backgroundColor:'white',
     flexDirection:'row',
     justifyContent:'space-evenly',
     backgroundColor: 'rgba(0, 0, 0, 0)',
     marginTop:320,
    },
    buttonClose: {
      justifyContent: "center",
      marginLeft: SCREENWIDTH/1.38,
      marginTop:SCREENHEIGHT/7.9,
      height: 80,
      width: 80,
    },
})

export default ModalChose;