import React from "react";
import { Text, Image, View, Button, Pressable, StyleSheet, Modal } from "react-native";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { auth } from './config/firebase';
import {getAuth, signOut, currentUser} from "firebase/auth";


const Profile = ({navigation, vprofile, setVprofile}) => {


    const user = auth.currentUser

  const Logoff = () => {
      signOut(auth)
      .then((userCredential) => {
        setVprofile(false)
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

      <View style={styles.modal}>     
      <Modal
        transparent
        animationType='slide'
        visible={vprofile}
        onRequestClose={() => setVprofile(false)}>
          <View style={styles.modal}>
          <View>
        <View>
        
      <View
        style={{ alignItems: "center", justifyContent: "center", marginTop: 190 }}
      >
       
        <Card
          style={{
            borderRadius: 40,
            width: "100%",
            height: "100%",
            
          }}
        >
          <View style={{ alignItems:'flex-end', marginRight:10}}>
           <TouchableOpacity onPress={() => setVprofile(false)}>
            <Image
              style={{ marginTop: 11, }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
          </TouchableOpacity>
          </View> 
          <View style={styles.User}>
          <Image
            source={require("../assets/User.png")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: -80,
              width: 130,
              height: 130,
              borderRadius: 400 / 2,
              marginLeft: 130,
              borderWidth: 1,
              borderColor: "#FFFFFF",
            }}
          />
          </View>
          <View
            style={{
              width: 30,
              alignContent: "center",
              justifyContent: "center",
              marginLeft: 20,
              marginLeft: 230,
              marginTop: -50,
            }}
          >
            <TouchableOpacity onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}>
              <Image source={require("../assets/lapis.png")} style={{}} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
                textAlign: 'center',
                marginTop: 15,
                marginBottom: 20,
                color: '#1C5C3D',
                fontSize: 25,
            }}
          >
            {name}
          </Text>
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent:'center',
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <TouchableOpacity>
              </TouchableOpacity>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/sino.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Notificações
              </Text>
            </Pressable>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/pessoa.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Informações Pessoais
              </Text>
            </TouchableOpacity>
            <Pressable
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/rodinhadef.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Configurações
              </Text>
            </Pressable>
            <Text onPress={Logoff} style={styles.TerminarSessao}>Terminar Sessão</Text>
          </View>
        </Card>
      </View>
      </View>
      </View>
    </View>
      </Modal>
    </View>
    ) 
  }
  else {
    return(
      <View style={styles.modal}>     
      <Modal
        transparent
        animationType='slide'
        visible={vprofile}
        onRequestClose={() => setVprofile(false)}>
          <View style={styles.modal}>
          <View>
    <View>
      <View
        style={{ alignItems: "center", justifyContent: "center", marginTop: 190 }}
      >
       
        <Card
          style={{
            borderRadius: 40,
            width: "100%",
            height: "100%",
            
          }}
        >
          
            <TouchableOpacity onPress={() =>  setVprofile(false)} >
            <Image
              style={{ marginLeft: 335, marginTop: 11 }}
              source={require("../assets/botaosairevent.png")}
            ></Image>
            
          </TouchableOpacity >
          <View style={styles.User}>
          <Image
            source={require("../assets/User.png")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: -80,
              width: 130,
              height: 130,
              borderRadius: 400 / 2,
              marginLeft: 130,
              borderWidth: 1,
              borderColor: "#FFFFFF",
              
            }}
          />
          </View>
          <View
            style={{
              width: 30,
              alignContent: "center",
              justifyContent: "center",
              marginLeft: 20,
              marginLeft: 230,
              marginTop: -50,
            }}
          >
            <TouchableOpacity onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}>
              <Image source={require("../assets/lapis.png")} style={{}} />
            </TouchableOpacity>
          </View>
          <Text onPress={Logoff} style={styles.TerminarSessao}>Faça login na sua conta</Text>
          <View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/sino.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Notificações
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/pessoa.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Informações Pessoais
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {navigation.navigate("Construction"); setVprofile(false)}}
            >
              <Image
                source={require("../assets/rodinhadef.png")}
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  marginLeft: 55,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Configurações
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      </View>
      </View>
      </View>
        </Modal>
      </View>
    )
};

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
  export default Profile;