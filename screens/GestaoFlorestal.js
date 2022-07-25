import React from "react";
import {View, Text, SafeAreaView,Image} from "react-native";
import * as OpenAnything from "react-native-openanything";
import { TouchableOpacity } from "react-native";

const GestaoFlorestal = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#52A77E",
      }}
    >
        <View style={{ alignItems:'flex-end', marginRight:10, marginTop:20,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image
                style={{ height:35,width:35}}
                source={require("../assets/Close.png")}
            ></Image>
        </TouchableOpacity>
    </View>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 40,
          color: "white",
          marginLeft: 20,
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Gestão Florestal
      </Text>
      <TouchableOpacity
        style={{
          height: 50,
          marginHorizontal: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          borderWidth: 4,
          borderColor: "white",
          backgroundColor: "white",
          alignContent: "center",
        }}
        onPress={() =>
          OpenAnything.Pdf("https://www.apfc.pt/xms/files/Docs/FSC-STD-POR_draft_1.0.pdf")
        }
      >
        <Text style={{ fontWeight: "bold", color: "#52A77E", fontSize: 15 }}>
          Download PDF
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GestaoFlorestal;
