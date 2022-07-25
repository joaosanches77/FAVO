import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button,TextInput } from 'react-native';
import AppNavigator from './screens/AppNavigator';
import firebase from './screens/config/firebase';
import LandingScreen from './screens/LandingScreen';


export default function App() {


  return ( 
  <AppNavigator  />

  );
}



