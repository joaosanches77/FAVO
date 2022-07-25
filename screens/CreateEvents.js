import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Modal,Pressable, Alert, KeyboardAvoidingView,ScrollView,Dimensions,Keyboard, TouchableWithoutFeedback} from "react-native";
import { Card, TextInput, Title } from "react-native-paper";
import {auth, database} from './config/firebase';
import { addDoc,setDoc, doc, collection } from "firebase/firestore";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import places from "./config/places"
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { KeyboardAwareScrollView, enableOnAndroid } from 'react-native-keyboard-aware-scroll-view'

const { height: SCREENHEIGHT } = Dimensions.get('window');
const { width: SCREENWIDTH } = Dimensions.get('window');



const CreateEvents = ({crtEvent, setCrtEvent, getMarkers2, data, hora, showDate, location}) => {

  




  const [region, setRegion] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [eventdata, setEventdata] = useState("");
  const [eventtime, setEventtime] = useState("");

  




  const user = auth.currentUser

  if (user !== null) {

    
    
    
   // navigator.geolocation = require('react-native-geolocation-service');

    const eventsCollectionRef = collection(database, "events/");

    
   

  const newEvent = async () => {
    if(titulo === '' || description === ''){

      Alert.alert('Preencha todos os campos')
      
        }
      else{
        showDate()
        const user = auth.currentUser
     await setDoc(doc(eventsCollectionRef), {
      name: user.displayName,
      idUser: user.uid,
      lat: region.lat || region.coords.latitude ,
      long: region.lng || region.coords.longitude,
      tittle: titulo,
      location: street,
      Description: description,
      Date: data,
      Time: hora,
      EventData: eventdata,
      EventTime: eventtime,
    
    });
    console.log(hora)
    setCrtEvent(false)
    Alert.alert('Evento criado!')
    getMarkers2()
  }
  };

  
  
  /*if( keyboardShow === true){*/
    return (
    
      <View style={styles.modal}> 
      <TouchableWithoutFeedback
        >
         
   
        <Modal
          transparent
          animationType='fade'
          visible={crtEvent}
          onRequestClose={() => setCrtEvent(false)
          
          } >
            
            <View style={styles.modal}>
            <View>
      <View>
        <Card
          style={{
            marginTop: 70,
            height: SCREENHEIGHT/1.2,
            width: SCREENWIDTH,
            borderRadius: 20,
          }}
        >
          <View
          style={{
            backgroundColor: "F6FFFB",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between'
          }}
        >
          <Image
             style={{ marginTop: 7, height:35, width:35}}
            source={require("../assets/EventBtn.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 14,
              color: "#52A77E",
            }}
          >
            Criar Evento
          </Text>
          <TouchableOpacity onPress={() => setCrtEvent(false)}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View> 
          <View style={{ flexDirection: "row" }}>
          <TextInput
          value={titulo}
          onChangeText={text => setTitulo(text)}
            style={{
              marginTop: 50,
              width: 350,
              height: 40,
              borderColor: "#000000",
              borderWidth: 0.2,
              backgroundColor: "#FFFFFF",
              marginLeft: 20,
            }}
            placeholder='Título'
          ></TextInput>
          </View>
          <View style={{
              flex:1,
              flexDirection:'row',
              justifyContent:'space-between',
              height:20,
              

            }}>
      <TextInput
          value={eventdata}
          onChangeText={text => setEventdata(text)}
            style={{
             marginTop:20,
             marginBottom:10,
              width: 150,
              height: 20,
              borderColor: "#000000",
              borderWidth: 0.2,
              backgroundColor: "#FFFFFF",
              marginLeft: 20,
            }}
            placeholder='DD-MM-YYYY'
          ></TextInput>
          <TextInput
          value={eventtime}
          onChangeText={text => setEventtime(text)}
            style={{
              marginTop:20,
             marginBottom:10,
              width: 150,
              height: 20,
              borderColor: "#000000",
              borderWidth: 0.2,
              backgroundColor: "#FFFFFF",
              marginLeft: 20,
              marginRight:20,
             
            }}
            placeholder='00:00'
          ></TextInput>
      </View>
      
          <View style={{
                marginTop: 70,
             
                height: 40,
                backgroundColor: '#1C5C3D',
                borderColor:'#1C5C3D',
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: 'center',
                
                alignItems: 'center',
                alignContent: 'center',
                width: 300,
                marginLeft: 50,
                marginRight: 50,
              }}>
  <TouchableOpacity onPress={() => {
          console.log(location);
          setRegion(location)
          setStreet('Morada não especificada')
          Alert.alert('A sua localização foi adicionada!')
        }} >
          <Text style={{
                color: '#fff',
              }} >Minha localização</Text>
            </TouchableOpacity>
  </View>
  
  </View>
  
  <View style={styles.container} >
          <GooglePlacesAutocomplete
        placeholder='Outra Localização'
        onPress={(data, details = null) => {
          console.log(data, details.formatted_address);
          setRegion(details.geometry.location)
          setStreet (details.formatted_address)
        }}
        enablePoweredByContainer={false}
        minLength={2}
        autoFocus={false}
        listViewDisplayed='auto'
        nearbyPlacesAPI='GooglePlacesSearch'
        //currentLocation={true}
        //currentLocationLabel='Current location'
        query={{
          key: 'AIzaSyBs_uhgP60Qmcn-NkcpinX-8m8vIiGCNLU',
          language: 'pt-br',
        }}
        
        fetchDetails = {true}
        styles={{
          textInputContainer:{
            width: '100%',
            backgroundColor: '#FFFFFF',
          },
          textInput: {
            height: 30,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          
        }}
      />
      </View>
     
      <View>
          <TextInput
          value={description}
          onChangeText={text => setDescription(text)}
            style={{
              width: 350,
              height: 70,
              borderColor: "#000000",
              borderWidth: 0.2,
              backgroundColor: "#FFFFFF",
              marginLeft: 20,
              marginBottom: 0,
              marginTop:0,
            }}
            placeholder='Descrição'
          ></TextInput>
  </View>
  < View style={{
                marginTop: 30,
                marginBottom: 100,
                height: 40,
                backgroundColor: '#1C5C3D',
                borderColor:'#1C5C3D',
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                alignContent: 'center',
                width: 300,
                marginLeft: 50,
                marginRight: 50,
              }}>
          <TouchableOpacity onPress={newEvent} >
          <Text style={{
                color: '#fff',
              }} >Criar Evento</Text>
            </TouchableOpacity>
          </View>
          
          
          
        </Card>
      </View>
      </View>
            </View>
        </Modal> 
  
        </TouchableWithoutFeedback>
      </View>
     
    );}
else{ 

    return(
    <View style={styles.modal}> 
      <TouchableWithoutFeedback
        >
         
   
        <Modal
          transparent
          animationType='fade'
          visible={crtEvent}
          onRequestClose={() => setCrtEvent(false)
          
          } >
            
            <View style={styles.modal}>
            <View>
      <View>
        <Card
          style={{
            marginTop: 100,
            height: SCREENHEIGHT/1.5,
            width: SCREENWIDTH,
            borderRadius: 20,
          }}
        >
          <View
          style={{
            backgroundColor: "F6FFFB",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between'
          }}
        >
          <Image
             style={{ marginTop: 7, height:35, width:35}}
            source={require("../assets/EventBtn.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 14,
              color: "#52A77E",
            }}
          >
            Criar Evento
          </Text>
          <TouchableOpacity onPress={() => setCrtEvent(false)}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
                                   
          <Text style={styles.TerminarSessao}>Faça login na sua conta</Text>                   
                                      
          </View>
          
        </Card>
      </View>
      </View>
            </View>
        </Modal> 
  
        </TouchableWithoutFeedback>
      </View>
    )
}
  }
/*else{
  return (
    
    <View style={styles.modal}> 
    <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutoAutomaticScrol='true'
        keyboardOpeningTime={0}
        
      >
       
        <ScrollView>
      <Modal
        transparent
        animationType='fade'
        visible={crtEvent}
        onRequestClose={() => setCrtEvent(false)
        
        } >
          
          <View style={styles.modal}>
          <View>
    <View>
      <Card
        style={{
          marginTop: 310,
          height: SCREENHEIGHT/1.5,
          width: SCREENWIDTH,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "F6FFFB",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between'
          }}
        >
          <Image
            style={{ marginTop: 7, height:35, width:35}}
            source={require("../assets/EventBtn.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 14,
              color: "52A77E",
            }}
          >
            Criar Evento
          </Text>
          <TouchableOpacity onPress={() => setCrtEvent(false)}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      <View> 
        <View style={{ flexDirection: "row" }}>
        <TextInput
        value={titulo}
        onChangeText={text => setTitulo(text)}
          style={{
            marginTop: 50,
            width: 350,
            height: 40,
            borderColor: "#000000",
            borderWidth: 0.2,
            backgroundColor: "#FFFFFF",
            marginLeft: 20,
          }}
          placeholder='Título'
        ></TextInput>
        </View>

</View>
<View style={styles.container} >
        <GooglePlacesAutocomplete
      placeholder='Localização'
      onPress={(data, details = null) => {
        console.log(data, details);
        setRegion(details.geometry.location)
      }}
      enablePoweredByContainer={false}
      minLength={2}
      autoFocus={false}
      listViewDisplayed='auto'
      nearbyPlacesAPI='GooglePlacesSearch'
      //currentLocation={true}
      //currentLocationLabel='Current location'
      query={{
        key: 'AIzaSyBs_uhgP60Qmcn-NkcpinX-8m8vIiGCNLU',
        language: 'pt-br',
      }}
      
      fetchDetails = {true}
      styles={{
        textInputContainer:{
          width: '100%',
          backgroundColor: '#FFFFFF',
          
        },
        textInput: {
          height: 30,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
          
        },
        
      }}
    />
    </View>
    <View>
        <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
          style={{
            width: 350,
            height: 70,
            borderColor: "#000000",
            borderWidth: 0.2,
            backgroundColor: "#FFFFFF",
            marginLeft: 20,
            marginBottom: 0,
            
          }}
          placeholder='Descrição'
        ></TextInput>
</View>
        < View style={{
                marginTop: 30,
                marginBottom: 100,
                height: 40,
                backgroundColor: '#1C5C3D',
                borderColor:'#1C5C3D',
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                alignContent: 'center',
         
                width: 300,
                marginLeft: 50,
                marginRight: 50,
              }}>
          <TouchableOpacity onPress={newEvent} >
          <Text style={{
                color: '#fff',
              }} >Criar Evento</Text>
              
          </TouchableOpacity>
        </View>
        
        
      </Card>
    </View>
    </View>
          </View>
      </Modal> 
      </ScrollView>
      </KeyboardAwareScrollView>
    </View>
   
  );
}
};*/

const styles = StyleSheet.create({
  modal:{
   
  },
  button: {
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#95deb6",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    height: 60,
  },
  TerminarSessao: {
      textAlign: 'center',
      marginTop: 90,
      color: '#1C5C3D',
      fontSize: 20,
    },
  text: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "#000000",
    alignSelf: "flex-start",
    marginLeft: 40,
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
        
  container: {
            flex: 1,
            padding: 20,
            paddingTop: Constants.statusBarHeight + 1,
            height:20,
            
           
          },
       
});

export default CreateEvents;
