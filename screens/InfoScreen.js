import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,TextInput,Keyboard,TouchableWithoutFeedback, Dimensions,TouchableOpacity, Modal,Pressable} from 'react-native';


function InfoScreen({navigation}) {
    return (
        <View
        style={{

            marginTop:40,
          }}
        >
        <View
           style={{
            backgroundColor: "#FFFFFF",
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
        }}
        >
          <Image
            style={{ marginTop: 15, marginLeft: 17 }}
            source={require("../assets/info.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 20,
              color: "#52A77E",
              fontWeight: "bold",
            }}
          >
            Informações
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{ marginTop: 15, marginRight:17 }}
              source={require("../assets/botaosair.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Ajuda")}>
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/ajuda.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Prevencao")}>
            <Image
              style={{ marginLeft: 20 }}
              source={require("../assets/prevencao.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Protecao")}>
            <Image
              style={{ marginLeft: 20, marginTop: 30 }}
              source={require("../assets/protecao.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("GestaoFlorestal")}
          >
            <Image
              style={{ marginLeft: 20, marginTop: 30 }}
              source={require("../assets/gestao.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Comunidade")}>
            <Image
              style={{ marginLeft: 20, marginTop: 30 }}
              source={require("../assets/Comunidade.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Servicos")}>
            <Image
              style={{ marginLeft: 20, marginTop: 30 }}
              source={require("../assets/service.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default InfoScreen;