import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Modal,Pressable, Alert, KeyboardAvoidingView,ScrollView,Dimensions,Keyboard, TouchableWithoutFeedback} from "react-native";
import { Card, TextInput } from "react-native-paper";
import {auth, database} from './config/firebase';
import {getAuth, signOut, currentUser} from "firebase/auth";
import { addDoc,setDoc, doc, collection } from "firebase/firestore";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { KeyboardAwareScrollView, enableOnAndroid } from 'react-native-keyboard-aware-scroll-view'
//import Geolocation from '@react-native-community/geolocation';

const { height: SCREENHEIGHT } = Dimensions.get('window');
const { width: SCREENWIDTH } = Dimensions.get('window');


const CreateAlerts = ({crtAlert, setCrtAlert, getMarkers1, data, hora, showDate, location}) => {


  



  const [keyboardShow, setKeyboardShow] = useState();

  /*useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);/*/

  const [region, setRegion] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");

  
  const user = auth.currentUser

  if (user !== null) {


  const alertsCollectionRef = collection(database, "alerts/");


  const newAlert = async () => {

    if(titulo === '' || description === ''){

      Alert.alert('Preencha todos os campos')
      
        }
      else{
        showDate()
    const user = auth.currentUser
     await setDoc(doc(alertsCollectionRef), {
      name: user.displayName,
      idUser: user.uid,
      lat: region.lat || region.coords.latitude,
      long: region.lng || region.coords.longitude,
      tittle: titulo,
      location: street,
      Description: description,
      Date: data,
      Time: hora,
    });
    setCrtAlert(false)
    Alert.alert('Alerta criado!')
    getMarkers1()
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
          visible={crtAlert}
          onRequestClose={() => setCrtAlert(false)
          
          } >
            
            <View style={styles.modal}>
            <View>
      <View>
        <Card
          style={{
            marginTop: 70,
            height: SCREENHEIGHT/1.3,
            width: SCREENWIDTH,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              backgroundColor: "#faf8ca",
              borderRadius: 10,
              flexDirection: "row",
              height: 50,
              justifyContent:'space-between',
            }}
          >
            <Image
              style={{ marginLeft: 6, marginTop: 7 }}
              source={require("../assets/alertascima.png")}
            ></Image>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 5,
                marginLeft: 0,
                color: "#FFDF1B",
                marginTop: 7,
              }}
            >
              Criar Alerta
            </Text>
            <TouchableOpacity onPress={() => setCrtAlert(false)}>
              <Image
                style={{ marginLeft: 0, marginTop: 7 }}
                source={require("../assets/sairbotaoalertas.png")}
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
                marginTop: 30,
             
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
          setStreet('???')
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
          console.log(data, details);
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
          <TouchableOpacity onPress={newAlert} >
          <Text style={{
                color: '#fff',
              }} >Criar Alerta</Text>
            </TouchableOpacity>
          </View>
          
          
        </Card>
      </View>
      </View>
            </View>
        </Modal> 
        </TouchableWithoutFeedback>
      </View>
     
    );
            }

      else{

        return(

        <View style={styles.modal}> 
        <TouchableWithoutFeedback
  
            
          >
      
          <Modal
            transparent
            animationType='fade'
            visible={crtAlert}
            onRequestClose={() => setCrtAlert(false)
            
            } >
              
              <View style={styles.modal}>
              <View>
        <View>
          <Card
            style={{
              marginTop: 100,
              height: SCREENHEIGHT/1.5,
              width: SCREENWIDTH,
              borderRadius: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#faf8ca",
                borderRadius: 10,
                flexDirection: "row",
                height: 50,
                justifyContent:'space-between',
              }}
            >
              <Image
                style={{ marginLeft: 6, marginTop: 7 }}
                source={require("../assets/alertascima.png")}
              ></Image>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 5,
                  marginLeft: 0,
                  color: "#FFDF1B",
                  marginTop: 7,
                }}
              >
                Criar Alerta
              </Text>
              <TouchableOpacity onPress={() => setCrtAlert(false)}>
                <Image
                  style={{ marginLeft: 0, marginTop: 7 }}
                  source={require("../assets/sairbotaoalertas.png")}
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
       
      );
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
        visible={crtAlert}
        onRequestClose={() => setCrtAlert(false)
        
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
            backgroundColor: "#faf8ca",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between'
          }}
        >
          <Image
            style={{ marginTop: 7 }}
            source={require("../assets/alertascima.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 1,
              color: "#FFDF1B",
            }}
          >
            Criar Alerta
          </Text>
          <TouchableOpacity onPress={() => setCrtAlert(false)}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/sairbotaoalertas.png")}
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
          <TouchableOpacity onPress={newAlert} >
          <Text style={{
                color: '#fff',
              }} >Criar Alerta</Text>
              
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
*/

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

export default CreateAlerts;
