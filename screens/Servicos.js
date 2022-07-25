import React from "react";
import {View, Text, SafeAreaView,Image, TouchableOpacity} from "react-native";
import HyperLink from "react-native-hyperlink";

const Servicos = ({navigation}) => {
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
        Serviços
      </Text>
      <HyperLink
        linkDefault={true}
        linkStyle={{ color: "white", fontSize: 22, fontStyle: "italic" }}
        linkText={(url) =>
          url === "https://solucaoflorestal.pt" ? "Solução Florestal" : url
        }
      >
        <Text style={{ marginLeft: 20, marginBottom: 20 }}>
          https://solucaoflorestal.pt{" "}
        </Text>
      </HyperLink>
      <HyperLink
        linkDefault={true}
        linkStyle={{ color: "white", fontSize: 22, fontStyle: "italic" }}
        linkText={(url) =>
          url === "https://llpsolucoes.com" ? "LLP Soluções" : url
        }
      >
        <Text style={{ marginLeft: 20, marginBottom: 20 }}>
          https://llpsolucoes.com
        </Text>
      </HyperLink>
      <HyperLink
        linkDefault={true}
        linkStyle={{ color: "white", fontSize: 22, fontStyle: "italic" }}
        linkText={(url) =>
          url === "https://agrocenteno.pt" ? "AgroCenteno" : url
        }
      >
        <Text style={{ marginLeft: 20, marginBottom: 20 }}>
          https://agrocenteno.pt
        </Text>
      </HyperLink>
      <HyperLink
        linkDefault={true}
        linkStyle={{ color: "white", fontSize: 22, fontStyle: "italic" }}
        linkText={(url) =>
          url === "https://relvaviva.pt/servicos-florestais/"
            ? "RelvaViva"
            : url
        }
      >
        <Text style={{ marginLeft: 20, marginBottom: 20 }}>
          https://relvaviva.pt/servicos-florestais/
        </Text>
      </HyperLink>
      <HyperLink
        linkDefault={true}
        linkStyle={{ color: "white", fontSize: 22, fontStyle: "italic" }}
        linkText={(url) =>
          url === "https://solucaoflorestal.pt" ? "Solução Florestal" : url
        }
      >
        <Text style={{ marginLeft: 20, marginBottom: 20 }}>
          https://solucaoflorestal.pt
        </Text>
      </HyperLink>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Serviço de Emergência:
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
            fontSize: 25,
          }}
        >
          112
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Servicos;
