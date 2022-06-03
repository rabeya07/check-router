import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
   
  apiKey: "AIzaSyA5pdGTbsunpUGrGkTdq4NOx83gOKhsqmE",
  authDomain: "check-router.firebaseapp.com",
  projectId: "check-router",
  storageBucket: "check-router.appspot.com",
  messagingSenderId: "254817618865",
  appId: "1:254817618865:web:58e563f5b3d032b917cb90"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();