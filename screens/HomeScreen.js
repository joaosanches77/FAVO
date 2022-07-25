import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,TextInput,Keyboard,TouchableWithoutFeedback, Dimensions, TouchableOpacity,Switch, Modal,Pressable, Platform, KeyboardAvoidingView } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import BottomSheet from './BottomSheet';
import {auth, database} from './config/firebase';
import { collection, getDocs } from "firebase/firestore";
import ViewEvents from './ViewEvents';
import ViewAlerts from './ViewAlerts';
import * as Location from 'expo-location';
import { reload } from 'firebase/auth';





function HomeScreen({ navigation}) {
  
  
  const alertsCollectionRef = collection(database, "alerts");
  const eventsCollectionRef = collection(database, "events");
  const [alerts, setAlerts] = useState([]);
  const [events, setEvents] = useState([]);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [vwEvents, setVwEvents] = useState(false);
  const [vwAlerts, setVwAlerts] = useState(false);
  const [location, setLocation] = useState([]);
  const [alertid, setAlertid] = useState("");
  const [valert, setValert] = useState("");
  const [lati, setLati] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  
  

  const getMarkers1 = async () => {
    const data = await getDocs(alertsCollectionRef);
    setAlerts(data.docs.map((doc) => ({ ...doc.data()})));
   
  };

  const getMarkers2 = async () => {
    const data = await getDocs(eventsCollectionRef);
    setEvents(data.docs.map((doc) => ({ ...doc.data()})));
  };

  

    
    const locationget= async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    const showDate = () => {
 
      //Get Current Date
      const date = new Date().getDate();
   
      //Get Current Month
      const month = new Date().getMonth() + 1;
   
      //Get Current Year
      const year = new Date().getFullYear();
   
      //Get Current Time Hours
      const hours = new Date().getHours();
   
      //Get Current Time Minutes
      const min = new Date().getMinutes();
   
      //Get Current Time Seconds
      const sec = new Date().getSeconds();
   
      const finalObject = date + '/' + month + '/' + year ;
  
      const finalObject1 = hours + ':' + min;
  
      
      setData(finalObject);
      setHora(finalObject1);
  
   
    }

 
    useEffect(() => {
    
      getMarkers1();
      getMarkers2();
      locationget();
      showDate();
     
  
    }, []);

    useEffect(() => {
    
    
  
    }, [events, alerts, data, hora]);

    

      

  

  
    
  

if (isEnabled1 === (true) & isEnabled2 === (true)){
  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.Switch1}>
    <Switch
      trackColor={{ false: "#FFFFFF", true: "#52A77E" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
  </View>
  <View style={styles.Switch2}>
    <Switch
      trackColor={{ false: "#FFFFFF", true: "#FFE01B" }}
      thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch2}
      value={isEnabled2}
      />
  </View>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 40.628707,
        longitude: -8.657288,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0921,
      }}>


        {alerts.map(alertas => (
        <Marker
          key= {alertas.lat}
          coordinate={{
            latitude: alertas.lat ,
            longitude: alertas.long
            }} 
            onPress={
              () => { setLati(alertas.lat); setVwAlerts(true); }
            }
             >
            <Image source={require('../assets/Alert.png')} style={{height: 51, width:40 }} />
        </Marker>
        ))}
        {events.map(eventos => (
        <Marker
        key= {eventos.lat}
         coordinate={{
          latitude: eventos.lat ,
          longitude: eventos.long
          }} 
          onPress={
            () => { setLati(eventos.lat); setVwEvents(true); }
          }
          >
            <Image source={require('../assets/Event.png')} style={{height: 51, width:40 }} />
          </Marker>
      
))}


        </MapView> 
      

        <View style={styles.container}>
          <StatusBar style='light'></StatusBar>
      </View>
      <BottomSheet  showDate={showDate} data={data} hora={hora} location={location} getMarkers1={getMarkers1} getMarkers2={getMarkers2} navigation={navigation} />
      <Text>back</Text>
      <ViewEvents setVwEvents = {setVwEvents} lati={lati} setLati= {setLati} vwEvents={vwEvents} />
      <ViewAlerts lati={lati} setLati= {setLati} setVwAlerts = {setVwAlerts} vwAlerts={vwAlerts} />
  
      </GestureHandlerRootView>
      
  );
  
}

if (isEnabled1 === (true) & isEnabled2 === (false)){

  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.Switch1}>
    <Switch
      trackColor={{ false: "#FFFFFF", true: "#52A77E" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
  </View>
  <View style={styles.Switch2}>
    <Switch
      trackColor={{ false: "#FFFFFF", true: "#FFE01B" }}
      thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch2}
      value={isEnabled2}
      />
  </View>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 40.628707,
        longitude: -8.657288,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0921,
      }}>

      {events.map(eventos => (
        <Marker
        key= {eventos.id}
         coordinate={{
          latitude: eventos.lat ,
          longitude: eventos.long
}} 
onPress={
  () => { setLati(eventos.lat); setVwEvents(true); }
}
          >
            <Image source={require('../assets/Event.png')} style={{height: 51, width:40 }} />
          </Marker>
      
))}
        </MapView> 
      

        <View style={styles.container}>
          <StatusBar style='light'></StatusBar>
      </View>
      <BottomSheet  showDate={showDate} data={data} hora={hora} location={location} getMarkers1={getMarkers1} getMarkers2={getMarkers2} navigation={navigation} />
      <Text>back</Text>
      <ViewEvents events={events} setVwEvents = {setVwEvents} vwEvents={vwEvents} />
      <ViewAlerts alerts={alerts} alertid={alertid} setVwAlerts = {setVwAlerts} vwAlerts={vwAlerts} />
  
      </GestureHandlerRootView>
      
  );
}

if (isEnabled1 === (false) & isEnabled2 === (true)){

  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.Switch1}>
    <Switch
    onChange={reload}
      trackColor={{ false: "#FFFFFF", true: "#52A77E" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
  </View>
  <View style={styles.Switch2}>
    <Switch
    onChange={reload}
      trackColor={{ false: "#FFFFFF", true: "#FFE01B" }}
      thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch2}
      value={isEnabled2}
      />
  </View>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 40.628707,
        longitude: -8.657288,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0921,
      }}>


        {alerts.map(alertas => (
        <Marker
          key= {alertas.id}
          coordinate={{
            latitude: alertas.lat ,
            longitude: alertas.long
            }} 
            onPress={
              () => { setAlertid(alertas.id); setVwAlerts(true); }
            }
             >
            <Image source={require('../assets/Alert.png')} style={{height: 51, width:40 }} />
        </Marker>
        ))}

      
        </MapView> 
      

        <View style={styles.container}>
          <StatusBar style='light'></StatusBar>
      </View>
      <BottomSheet  showDate={showDate} data={data} hora={hora} location={location} getMarkers1={getMarkers1} getMarkers2={getMarkers2} navigation={navigation} />
      <Text>back</Text>
      <ViewEvents events={events} setVwEvents = {setVwEvents} vwEvents={vwEvents} />
      <ViewAlerts alerts={alerts} alertid={alertid} setVwAlerts = {setVwAlerts} vwAlerts={vwAlerts} />
  
      </GestureHandlerRootView>
      
  );
}

else{
  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.Switch1}>
    <Switch
    onChange={reload}
      trackColor={{ false: "#FFFFFF", true: "#52A77E" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
  </View>
  <View style={styles.Switch2}>
    <Switch
    onChange={reload}
      trackColor={{ false: "#FFFFFF", true: "#FFE01B" }}
      thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch2}
      value={isEnabled2}
      />
  </View>
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 40.628707,
        longitude: -8.657288,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0921,
      }}>


        </MapView> 
      

        <View style={styles.container}>
          <StatusBar style='light'></StatusBar>
      </View>
      <BottomSheet  showDate={showDate} data={data} hora={hora} location={location} getMarkers1={getMarkers1} getMarkers2={getMarkers2} navigation={navigation} />
      <Text>back</Text>
      <ViewEvents events={events} setVwEvents = {setVwEvents} vwEvents={vwEvents} />
      <ViewAlerts alerts={alerts} alertid={alertid} setVwAlerts = {setVwAlerts} vwAlerts={vwAlerts} />
  
      </GestureHandlerRootView>
      
  );
  
}

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    Retroceder: {
      textAlign: 'left',
      marginTop: 0,
      marginBottom: 10,
      marginLeft: 5,
      color: '#1C5C3D',
      fontSize: 17,
      backgroundColor:"#FFFFFF"

},
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/1.2,
      },

      Switch1: {
        zIndex:30,
        position:'absolute',
        top: 100,
        right: 20,
        backgroundColor:'#99A7A0',
        height:40,
        width:70,
        borderRadius:20,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        zIndex:200,
        paddingTop:10,
        paddingLeft:7,
        opacity:10,
        
        
      },
      Switch2: {
        zIndex:30,
        position:'absolute',
        top: 100,
        right: 20,
        backgroundColor:'#99A7A0',
        height:100,
        width:70,
        borderRadius:20,
        justifyContent: 'flex-end',
        alignContent: 'center',
       alignSelf: 'center',
        textAlign: 'center',
        paddingBottom:10,
        paddingLeft:7,
        opacity:10,
      },
      Switch: {
        
  
      },

 
  
  });

export default HomeScreen;