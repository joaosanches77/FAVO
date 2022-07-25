import React, { useState } from "react";
import { View, Text, SafeAreaView,Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Ajuda = ({navigation}) => {
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  const [shouldShow4, setShouldShow4] = useState(false);
  const [shouldShow5, setShouldShow5] = useState(false);
  const [shouldShow6, setShouldShow6] = useState(false);



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
      <View sstyle={{
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        backgroundColor: "#52A77E",
      }}>
        <Text
          style={{
            fontSize: 40,
            marginBottom: 40,
            color: "white",
            marginLeft: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Ajuda
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginBottom: 20,
        }}
        onPress={() => setShouldShow1(!shouldShow1)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          O que é a FAVO?
        </Text>
        {shouldShow1 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            A FAVO (Fire Awareness Valorization Opportunities) nasceu de uma
            tese de doutoramento e do trabalho de estudantes da Licenciatura em
            Novas Tecnologias da Comunicação da Universidade de Aveiro e
            consiste numa aplicação orientada para a participação comunitária na
            prevenção dos incêndios florestais. A aplicação permite a adição de
            alertas e a criação de eventos através de um mapa e estabelece um
            espaço que promove a preservação da natureza e o trabalho em equipa.
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() => setShouldShow2(!shouldShow2)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Alertas e Eventos
        </Text>
        {shouldShow2 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            Alertas são sinalizações de que algo está mal, como por exemplo uma
            mata suja. Eventos são algo organizado que envolve várias pessoas,
            como uma formação ou uma limpeza de mata. Os alertas podem dar
            origem a eventos, como as limpezas de matas, por exemplo.
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 20 }}
        onPress={() => setShouldShow3(!shouldShow3)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Como criar ações?
        </Text>
        {shouldShow3 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            Para criar uma ação (alertas ou eventos) basta aceder à página
            principal da app e clicar no pin situado no canto inferior do mapa
            selecionando a tipologia correspondente. Para criar a ação, o
            utilizador tem que estar na localização exata da ocorrência
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 20,
        }}
        onPress={() => setShouldShow4(!shouldShow4)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
         Porque é que não consigo ver a minha localização?
        </Text>
        {shouldShow4 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            Feche a aplicação e tente ativar a localização no menu do seu smartphone e volte a iniciar a aplicação.
Caso o problema se mantenha, tente atualizar o sistema operativo do seu smartphone e verifique a sua ligação á internet.
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 20,
        }}
        onPress={() => setShouldShow5(!shouldShow5)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
         Não recebi email de confirmação após  criar a minha conta
        </Text>
        {shouldShow5 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            Verifique se o email de confirmação está armazenado na pasta de spam.
          </Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 20,
        }}
        onPress={() => setShouldShow6(!shouldShow6)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
         A aplicação não funciona corretamente
        </Text>
        {shouldShow6 ? (
          <Text style={{ marginLeft: 20, color: "white", marginTop: 10 }}>
            Tente atualizar o seu sistema operativo e aplicação na plataforma respetiva.
          </Text>
        ) : null}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Ajuda;
