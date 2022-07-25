import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,TextInput,Keyboard,TouchableWithoutFeedback, Dimensions,TouchableOpacity, Modal,Pressable} from 'react-native';
import CreateAlerts from './CreateAlerts';
import Profile from './Profile';
import ModalChose from './ModalChoose';
import CreateEvents from './CreateEvents';
import MyEvents from './MyEvents';

const { height: SCREENHEIGHT } = Dimensions.get('window');

function BottomSheet({location, navigation, getMarkers1, getMarkers2, data, hora, showDate }) {

  const [crtAlert, setCrtAlert] = useState(false);
  const [crtEvent, setCrtEvent] = useState(false);
  const [vprofile, setVprofile] = useState(false);
  const [vmyevents, setVmyevents] = useState(false);
  const [choose, setChoose] = useState(false);
  

    return (
     
        <View style={styles.Bottom} >
          <View style={styles.ButtonsT}>
          <View style={styles.Perfil}>
            <TouchableOpacity onPress={() => setVprofile(true)}>
              <Image 
              source={require('../assets/User.png')}
              style={styles.add}
              />
              </TouchableOpacity>
            </View> 
            <View style={styles.Line} />
            <View style={styles.Adicionar}>
              <TouchableOpacity onPress={() => setChoose(true)}>
            <Image 
              source={require('../assets/Add.png')}
              style={styles.add}
              />
              </TouchableOpacity>
            </View>
            </View> 
            <View style={styles.Buttons}>
            <TouchableOpacity style={styles.Buttonl} onPress={() => navigation.navigate('News')}>
              <Text>Notícias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttonl} onPress={() => navigation.navigate('MyEvents')}>
              <Text>Meus Alertas e Eventos</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.Buttons}>
            <TouchableOpacity style={styles.Buttonr} onPress={() => navigation.navigate('Calendarr')}>
              <Text>Calendário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttonr} onPress={() => navigation.navigate('Info')}>
              <Text>Informações</Text>
            </TouchableOpacity>
            </View>
            <ModalChose choose= {choose} setChoose={setChoose} crtAlert = {crtAlert} setCrtAlert={setCrtAlert} crtEvent = {crtEvent} setCrtEvent={setCrtEvent}/>
          <CreateAlerts location={location} getMarkers1={getMarkers1} navigation={navigation} crtAlert = {crtAlert} setCrtAlert={setCrtAlert} data= {data} hora={hora} showDate={showDate}/>
          <CreateEvents location={location} getMarkers2={getMarkers2} navigation={navigation} crtEvent = {crtEvent} setCrtEvent={setCrtEvent}  data= {data} hora={hora} showDate={showDate}/>
          <Profile navigation={navigation} vprofile = {vprofile} setVprofile={setVprofile}/>
            </View>
           
    );
}
const styles = StyleSheet.create({
  
    Bottom: {
      height: SCREENHEIGHT/3,
      width: '100%',
      position: 'absolute',
      bottom:0,
      backgroundColor:'#FFFFFF',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
      zIndex:30,
    },
    Buttons: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignContent: 'center',
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
        backgroundColor:'	#808080',
        alignSelf:'center',
        marginVertical: 15,
        marginHorizontal: 50,
        borderRadius: 2,
      },
      Buttonl: {
        flex: 1,
        width: 120,
        height: 80,
        backgroundColor:'#E5F2EC',
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 20,
        borderColor:'#1C5C3D',
        borderWidth: 0.4,
        justifyContent: 'center',
        alignItems:'center',
        
      },
      Buttonr: {
        flex: 1,
        width: 150,
        height: 80,
        backgroundColor:'#E5F2EC',
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: '1C5C3D',
        borderColor:'#1C5C3D',
        borderWidth: 0.4,
        justifyContent: 'center',
        alignItems:'center',
      },
      Perfil: {
       position:'relative',
       top: -50,
       backgroundColor:'#1C5C3D',
       width: 80,
       height: 80,
       borderRadius: 1000,
       borderColor:'#fff',
       borderWidth: 4,
       shadowColor: "#000",
       shadowOffset: {
	    width: 0,
	    height: 2,
        },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5, 
       justifyContent: 'center',
       alignItems:'center',
      },
      Adicionar: {
       position:'relative',
       top: -50,
       margin:0,
       borderColor:'#fff',
       borderWidth: 4,
       backgroundColor:'#1C5C3D',
       width: 80,
       height: 80,
       borderRadius: 1000,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
       justifyContent: 'center',
       alignItems:'center',
      },
      add: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems:'center',
      },
      modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },

});

export default BottomSheet;