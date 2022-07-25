import React, {useRef, useEffect} from "react";
import Lottie from "lottie-react-native";
import { Text, View, Image,StyleSheet } from "react-native";
import Constants from 'expo-constants';
import {auth, database} from './config/firebase';



function LoadingScreen({navigation}) {
  
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })
    const timer = setTimeout(() => {
      unsubscribe()
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#52A67D",
      }}
    >
      <Lottie
        source={require("../assets/splash4.json")}
        autoPlay
        loop={false}
        speed={1.5}
        onAnimationFinish={() => navigation.navigate("Tutorial")}
        style={{
          height: 300,
          width: 300,
          alignSelf: "center",
        }}
      />
      <View style={{}}>
        <Image
          style={{
            height: 70,
            width: 100,
            marginTop: 100,
            alignSelf: "center",
          }}
          source={require("../assets/Logofavo.png")}
        ></Image>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          FAVO
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 13,
            color: "#FFFFFF",
            fontStyle: "italic",
            marginTop: 5,
          }}
        >
          Fire Awareness Valorization Opportunities
        </Text>
      </View>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: Constants.statusBarHeight + 10,
      backgroundColor: '#ecf0f1',
    },
  });

  export default LoadingScreen;