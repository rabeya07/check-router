import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDS5WoTITxFo2Yf_X20NgnVG4cPz3hng_Y",
    authDomain: "login-authentication-8e742.firebaseapp.com",
    projectId: "login-authentication-8e742",
    storageBucket: "login-authentication-8e742.appspot.com",
    messagingSenderId: "928693399540",
    appId: "1:928693399540:web:7174b7603668230cfe13a1"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();