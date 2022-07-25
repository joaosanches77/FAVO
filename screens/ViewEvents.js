import React, {useState} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet,Modal,Dimensions } from "react-native";
import { Card, TextInput } from "react-native-paper";
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import {auth, database} from './config/firebase';

const { height: SCREENHEIGHT } = Dimensions.get('window');
const { width: SCREENWIDTH } = Dimensions.get('window');

const ViewEvents = ({ vwEvents, setVwEvents, lati, setLati}) => {

  const [events, setEvents] = useState([]);

  

  if (vwEvents === true){
    const q = query(collection(database, "events"), where("lat", "==", lati));

  const getInfo2 = async () => {
    const data = await getDocs(q);
    setEvents(data.docs.map((doc) => ({ ...doc.data() })))
    

  };

    getInfo2();



  return (
    <View style={styles.modal}>     
    <Modal
      transparent
      animationType='fade'
      visible={vwEvents}
      onRequestClose={() => setVwEvents(false)}>
        <View style={styles.modal}>
        <View>
    <View>
    {events.map(eventos => (
      
      <Card
        key= {eventos.lat}
        style={{
          height: 600,
          marginTop: 200,
          borderRadius: 20,

          width: SCREENWIDTH,
        }}
      >
        <View
          style={{
            backgroundColor: "#e3faec",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between',
        
          }}
        >
          <Image
            style={{ marginTop: 7, width:30,height:30, }}
            source={require("../assets/EventBtn.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 5,
              color: "#52A77E",
              marginTop: 7,
              
            }}
          >
            Evento
          </Text>
          <TouchableOpacity onPress={ () => { setLati(""); setVwEvents(false); }}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', }}>
          <Text
            style={{
             
              marginTop: 20,
              fontWeight: "bold",
              color: "#52A77E",
              fontSize: 18,
              textAlign:'center',
             
            }}
          >
            {eventos.tittle}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Image
            style={{ marginLeft: 20, marginRight: 20 }}
            source={require("../assets/location.png")}
          ></Image>
          <Text style={{ color: "#52A77E", width:300 }}>{eventos.location}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Image
            style={{ marginLeft: 20, marginRight: 20 }}
            source={require("../assets/calendar.png")}
          ></Image>
          <Text style={{ color: "#52A77E" }}>{eventos.EventData}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Image
            style={{ marginLeft: 20, marginRight: 20 }}
            source={require("../assets/clock.png")}
          ></Image>
          <Text style={{ color: "#52A77E" }}>{eventos.EventTime}</Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 70, width: 350 }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          {eventos.description}
          </Text>
        </View>
        <View  style={{alignItems:'center'}}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#52A77E",
              marginTop: 30,
              textAlign:'center'
              
            }}
          >
            Nº de Participantes: 3
          </Text>
        </View>
        <View style={{  marginTop: 70, width: 400, alignItems:'center' }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          Colocado por: {eventos.name}
          </Text>
        </View>
        <View style={{  marginTop: 20, width: 400, alignItems:'center' }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          {eventos.Date}
          </Text>
          <Text style={{ fontSize: 16, color: "#52A77E", marginTop: 20 }}>
          {eventos.Time}
          </Text>
        </View>
      </Card>
      ))}
    </View>
    </View>
    </View>
      </Modal>
    </View>
  )
}

else{

  return(
    <Text>dad</Text>
  )
}
}

const styles = StyleSheet.create({
  modal:{
    alignContent:'center',
    alignItems:'center'
  },
    button: {
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#95deb6",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
      height: 70,
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
      
  });
  
export default ViewEvents;
