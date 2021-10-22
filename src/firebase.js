import firebase from "firebase/app";
import "firebase/database"
var firebaseConfig = {
    apiKey: "AIzaSyDM3elUX8AI0AkrpXGPQObCJqRWXRzrSC0",
    authDomain: "react-contact-69e6e.firebaseapp.com",
    databaseURL: "https://react-contact-69e6e-default-rtdb.firebaseio.com",
    projectId: "react-contact-69e6e",
    storageBucket: "react-contact-69e6e.appspot.com",
    messagingSenderId: "974248023568",
    appId: "1:974248023568:web:7bb66f13d5c0dd3e611c95"
  };
  // Initialize Firebase
 const fireDb =  firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();