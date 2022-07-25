import React, {useState,useEffect} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet,Modal } from "react-native";
import { Card, TextInput } from "react-native-paper";
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import {auth, database} from './config/firebase';

const ViewAlerts = ({vwAlerts, setVwAlerts, lati, setLati}) => {


  const [alerts, setAlerts] = useState([]);


  


  if (vwAlerts === true){

    const q = query(collection(database, "alerts"), where("lat", "==", lati));

  const getInfo1 = async () => {
    const data = await getDocs(q);
    setAlerts(data.docs.map((doc) => ({ ...doc.data() })))
    

  };

      getInfo1();
  
      
  return (
    
    <View style={styles.modal}>     
    <Modal
      transparent
      animationType='fade'
      visible={vwAlerts}
      onRequestClose={() => setVwAlerts(false)}>
        <View style={styles.modal}>
        <View>
    <View>
    {alerts.map(alertas => (
      <Card
      key= {alertas.lat}
        style={{
          height: 600,
          marginTop: 200,
          borderRadius: 20,
         
        }}
      >
        <View
          style={{
            backgroundColor: "#FEFAE5",
            borderRadius: 10,
            flexDirection: "row",
            height: 50,
            justifyContent:'space-between',
          }}
        >
          <Image
            style={{ marginTop: 7, width:30,height:30, }}
            source={require("../assets/AlertBtn.png")}
          ></Image>
          
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 5,
              color: "#E0C30B",
              marginTop: 7,
            }}
          >
           Alerta
          </Text>
    
          <TouchableOpacity onPress={ () => { setLati(""); setVwAlerts(false); }}>
            <Image
              style={{ marginTop: 7 }}
              source={require("../assets/sairbotaoalertas.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems:'center'}}>
        
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              color: "#52A77E",
              fontSize: 18,
              textAlign:'center',
            }}
          >
            {alertas.tittle}
          </Text>
          
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Image
            style={{ marginLeft: 20, marginRight: 20 }}
            source={require("../assets/location.png")}
          ></Image>
          <Text style={{ color: "#52A77E", width:300 }}>{alertas.location}</Text>
        </View>
        
        <View style={{ marginLeft: 20, marginTop: 70, width: 350 }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          {alertas.Description}
          </Text>
        </View>
        <View style={{  marginTop: 70, width: 400, alignItems:'center' }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          Colocado por: {alertas.name}
          </Text>
        </View>
        <View style={{  marginTop: 20, width: 400, alignItems:'center' }}>
          <Text style={{ fontSize: 16, color: "#52A77E" }}>
          {alertas.Date}
          </Text>
          <Text style={{ fontSize: 16, color: "#52A77E", marginTop: 20 }}>
          {alertas.Time}
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

else {

  return(
    <Text>dad</Text>
  )
}
}


const styles = StyleSheet.create({
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
  
export default ViewAlerts;
