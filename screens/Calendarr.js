import React from "react";
import Calendar from "react-native-calendars/src/calendar";
import {View,Text,Image,ScrollView,Linking,TouchableOpacity,StyleSheet} from "react-native";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set.",
    "Out.",
    "Nov.",
    "Dez.",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt";

export default function Calendarr({navigation}) {
  return (
    <View>
    <View style={{ alignItems:'flex-end', marginRight:10, marginTop:30,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{ marginTop: 10}}
              source={require("../assets/botaosair.png")}
            ></Image>
          </TouchableOpacity>
          </View>
    <View style={{
      marginTop:170,
    }}>
       
      <Calendar
        onDayPress={(day) => {
          alert(
            "Dia Selecionado: " +
              day.dateString +
              "\n" +
              "Não tem eventos para hoje."
          );
        }}
        theme={{
          calendarBackground: "#FFFFFF",
          dayTextColor: "#38730a",
          todayButtonFontWeight: "bold",
          monthTextColor: "#38730a",
          arrowColor: "#38730a",
          textMonthFontWeight: "bold",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        markingType={"custom"}
        markedDates={{
          "2022-06-28": {
            customStyles: {
              container: { backgroundColor: "#c4bb02", elevation: 2 },
              text: { color: "#FFFFFF" },
            },
          },
          "2022-06-18": {
            customStyles: {
              container: { backgroundColor: "green", elevation: 2 },
              text: { color: "#FFFFFF" },
            },
          },
        }}
      />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  Buttons: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignContent: 'space-between',
      alignSelf: 'center',
      textAlign: 'center'
      
    },

    ButtonsT: {
      flexDirection: 'row', 
      justifyContent: 'center',
      height: 30,
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