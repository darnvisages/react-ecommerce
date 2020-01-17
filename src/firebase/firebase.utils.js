import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmdSdU-unjY_CrOkYbupl13utWdKlstzk",
    authDomain: "react-ecommerce-db-6c0b5.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-6c0b5.firebaseio.com",
    projectId: "react-ecommerce-db-6c0b5",
    storageBucket: "react-ecommerce-db-6c0b5.appspot.com",
    messagingSenderId: "791414360647",
    appId: "1:791414360647:web:97671edc44a51b24d8ff62",
    measurementId: "G-R4XBYH46J3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
