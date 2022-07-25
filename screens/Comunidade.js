import React from "react";
import { View, Text, SafeAreaView , TouchableOpacity,Image} from "react-native";

const Comunidade = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
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
        <View style={{ alignItems:'center', marginRight:10, marginTop:90,}}>
        <TouchableOpacity>
            <Image
               style={{ height:200,width:200}}
               source={require("../assets/Constru.png")}
            ></Image>
        </TouchableOpacity>
        <Text  style={{
          fontSize: 30,
          marginBottom: 40,
          color: "white",
          marginLeft: 20,
          marginTop: 20,
          fontWeight: "bold",
          textAlign:'center',
        }}>Estamos a trabalhar nesta página</Text>
    </View>

    </SafeAreaView>
  );
};

export default Comunidade;