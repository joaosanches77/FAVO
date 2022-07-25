import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAi_L9lx-GrVbEDPk8_B20eBFxqZjgv7as",
  authDomain: "favo-351918.firebaseapp.com",
  projectId: "favo-351918",
  storageBucket: "favo-351918.appspot.com",
  messagingSenderId: "810961404495",
  appId: "1:810961404495:web:e042759265b2956e54203a",
  measurementId: "G-480131J0PL"
};


const app =  firebase.initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app); 

