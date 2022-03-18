import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase' 

const firebaseConfig = {
    apiKey: "AIzaSyDeDCDWGEkxfMO6zy9drrZM47dRqJjFpfk",
    authDomain: "olx-clone-6cafd.firebaseapp.com",
    projectId: "olx-clone-6cafd",
    storageBucket: "olx-clone-6cafd.appspot.com",
    messagingSenderId: "651997950699",
    appId: "1:651997950699:web:ff13235669b62a902d04ae",
    measurementId: "G-R7P9JYLRCC"
  };

export default firebase.initializeApp(firebaseConfig)