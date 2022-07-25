import React, {useState,useEffect} from "react";
import { Text, Image, View, Button, Pressable, StyleSheet, Modal, Alert,TouchableOpacity,SafeAreaView } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {auth, database} from './config/firebase';
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import {getAuth, signOut, currentUser} from "firebase/auth";



const MyEvents = ({ navigation}) => {

    const user = auth.currentUser
    const [events, setEvents] = useState ([]);
    const [alerts, setAlerts] = useState ([]);

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


    if (  user !== null  ){

    
        const q = query(collection(database, "events"), where("name", "==", user.displayName));
       
      const getInfo3 = async () => {
        const data = await getDocs(q);
        setEvents(data.docs.map((doc) => ({ ...doc.data() })))
        
    
      };

      const q1 = query(collection(database, "alerts"), where("name", "==", user.displayName));
    
      const getInfo4 = async () => {
        const data = await getDocs(q1);
        setAlerts(data.docs.map((doc) => ({ ...doc.data() })))
    
      };
      useEffect(() => {
    
        getInfo4();
        getInfo3();

       
    
      }, []);
  
      useEffect(() => {
      
      
    
      }, [events, alerts]);
  
    
       
       

    return (
       
            
                <SafeAreaView style={styles.container}>
                    <View>
                        <View>
                            <View
                                style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}
                            >

                                <Card
                                    style={{
                                        borderTopLeftRadius: 35,
                                        borderTopRightRadius: 35,
                                        width: "100%",
                                        height: "100%",

                                    }}>

                                    <View
                                        style={{
                                            backgroundColor: "#F6FFFB",
                                            borderRadius: 10,
                                            flexDirection: "row",
                                            height: 65,
                                            marginTop: 0,
                                            justifyContent:'space-between',
                                            borderTopLeftRadius: 35,
                                            borderTopRightRadius: 35,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 0,
                                            shadowColor: "#1C5C3D",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 5,
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 21,
                                                marginTop: 17,
                                                marginLeft: 17,
                                                color: "#52A77E",
                                                                                        }}>
                                            Meus Alertas e Eventos
                                        </Text>

                                        <TouchableOpacity style={{ marginRight: 17, }} onPress={() => navigation.navigate('Home')} >
                                            <Image
                                                style={{ marginTop: 15 }}
                                                source={require("../assets/botaosairevent.png")}
                                            ></Image>

                                        </TouchableOpacity >
                                    
                                    </View>

                                  
                                    <View>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                flexDirection: "row",
                                                marginTop: 25,
                                            }}
                                        >
                                        </View>
                                        {events.map(eventos => (
                                            
                                        <TouchableOpacity
                                        key= {eventos.lat}
                                            style={styles.button1}
                                            onPress={() => {navigation.navigate("Construction")}}

                                        >
                                            <Image
                                                source={require("../assets/EventBtn.png")}
                                                style={{
                                                    marginLeft: 20,
                                                    width: 40,
                                                    height: 40,
                                                }}
                                            />
                                            
                                            <Text
                                                style={{
                                                    position: "absolute",
                                                    marginLeft: 80,
                                                    fontSize: 17,
                                                    
                                                    color: "#52A77E",
                                                }}
                                            >
                                                {eventos.tittle}
                                            </Text>
                                             
                                        
                                            <Text style={{
                                                position: "absolute",
                                                marginLeft: 280,
                                                fontSize: 35,
                                               
                                                color: "#52A77E",
                                            }}>{'>'}</Text>
                                        </TouchableOpacity>
                                          ))}
                                          {alerts.map(alertas => (
                                        <TouchableOpacity
                                        key= {alertas.lat}
                                            style={styles.button2}
                                            onPress={() => {navigation.navigate("Construction")}}
                                        >
                                            <Image
                                                source={require("../assets/AlertBtn.png")}
                                                style={{
                                                    marginLeft: 20,
                                                    width: 40,
                                                    height: 40,
                                                }}
                                            />
                                            
                                            <Text
                                                style={{
                                                    position: "absolute",
                                                    marginLeft: 80,
                                                    fontSize: 17,
                                                    
                                                    color: "#52A77E",
                                                }}
                                            >
                                                {alertas.tittle}
                                            </Text>
                                             
                                        
                                            <Text style={{
                                                position: "absolute",
                                                marginLeft: 280,
                                                fontSize: 35,
                                               
                                                color: "#52A77E",
                                            }}>{'>'}</Text>
                                        </TouchableOpacity>
                                          ))}
                                       
                                    </View>
                        
                                </Card>
                                
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
  
      
    )
            }
            else{
                return(
               
                    <SafeAreaView style={styles.container}>
                    <View>
                        <View>
                            <View
                                style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}
                            >

                                <Card
                                    style={{
                                        borderTopLeftRadius: 35,
                                        borderTopRightRadius: 35,
                                        width: "100%",
                                        height: "100%",

                                    }}>

                                    <View
                                        style={{
                                            backgroundColor: "#F6FFFB",
                                            borderRadius: 10,
                                            flexDirection: "row",
                                            height: 65,
                                            marginTop: 0,
                                            justifyContent:'space-between',
                                            borderTopLeftRadius: 35,
                                            borderTopRightRadius: 35,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 0,
                                            shadowColor: "#1C5C3D",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 5,
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 21,
                                                marginTop: 17,
                                                marginLeft: 17,
                                                color: "#52A77E",
                                                                                        }}>
                                            Meus Alertas e Eventos
                                        </Text>

                                        <TouchableOpacity style={{ marginRight: 17, }} onPress={() => navigation.navigate('Home')}>
                                            <Image
                                                style={{ marginTop: 15 }}
                                                source={require("../assets/botaosairevent.png")}
                                            ></Image>

                                        </TouchableOpacity >
                                    
                                    </View>

                                  
                                    <View>
                                   
                                    <Text onPress={Logoff} style={styles.TerminarSessao}>Faça login na sua conta</Text>
        
                                        
                                       
                                       
                                    </View>
                        
                                </Card>
                                
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
    
        
    )
            }
            
                                        
}


const styles = StyleSheet.create({
    container: {

    },
    button1: {
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#E5F2EC",
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        height: 75,
    },
    button2: {
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#FEFAE5",
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        height: 75,
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
        color: "black",
        alignSelf: "flex-start",
        marginLeft: 40,

    },
    Line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        marginHorizontal: 50,
        borderRadius: 2,
    },

    User: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});


export default MyEvents;