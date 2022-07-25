import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import BottomSheet from './BottomSheet';
import UnderConstruction from './UnderConstruction'
import News from './News'
import Calendarr from './Calendarr';
import Profile from './Profile';
import CreateAlerts from './CreateAlerts';
import ViewEvents from './ViewEvents';
import ViewAlerts from './ViewAlerts';
import TutorialScreen from './TutorialScreen';
import LoadingScreen from './LoadingScreen';
import InfoScreen from './InfoScreen';
import Ajuda from './Ajuda';
import Prevencao from './Prevencao';
import Protecao from './Protecao';
import GestaoFlorestal from './GestaoFlorestal';
import Comunidade from './Comunidade';
import Servicos from './Servicos';
import MyEvents from './MyEvents';




const Stack = createNativeStackNavigator();

function AppNavigator() {

    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Loading">
            <Stack.Screen name= "Landing" component= {LandingScreen}></Stack.Screen>
            <Stack.Screen name= "Register" component= {RegisterScreen}></Stack.Screen>
            <Stack.Screen name= "Home" component= {HomeScreen}></Stack.Screen>
            <Stack.Screen name= "Bottom" component= {BottomSheet}></Stack.Screen>
            <Stack.Screen name= "Construction" component= {UnderConstruction}></Stack.Screen>
            <Stack.Screen name= "News" component= {News} options={{presentation:'modal'}}></Stack.Screen>
            <Stack.Screen name= "Calendarr" component= {Calendarr}></Stack.Screen>
            <Stack.Screen name= "Profile" component= {Profile} options={{presentation:'modal'}}></Stack.Screen>
            <Stack.Screen name= "CAlerts" component= {CreateAlerts} options={{presentation:'modal'}}></Stack.Screen>
            <Stack.Screen name= "VEvents" component= {ViewEvents} options={{presentation:'modal'}}></Stack.Screen>
            <Stack.Screen name= "VAlerts" component= {ViewAlerts} options={{presentation:'modal'}}></Stack.Screen>
            <Stack.Screen name= "Tutorial" component= {TutorialScreen}></Stack.Screen>
            <Stack.Screen name= "Loading" component= {LoadingScreen}></Stack.Screen>
            <Stack.Screen name= "Info" component= {InfoScreen}></Stack.Screen>
            <Stack.Screen name= "Ajuda" component= {Ajuda}></Stack.Screen>
            <Stack.Screen name= "Prevencao" component= {Prevencao}></Stack.Screen>
            <Stack.Screen name= "Protecao" component= {Protecao}></Stack.Screen>
            <Stack.Screen name= "GestaoFlorestal" component= {GestaoFlorestal}></Stack.Screen>
            <Stack.Screen name= "Comunidade" component= {Comunidade}></Stack.Screen>
            <Stack.Screen name= "Servicos" component= {Servicos}></Stack.Screen>
            <Stack.Screen name= "MyEvents" component= {MyEvents}></Stack.Screen>


        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator;