import firebase from "firebase";
import 'firebase/auth'

import 'firebase/firebase' 
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCmCGd24bS3RXwYHGw0lnO0N6JYRW6OAjw",
  authDomain: "olx-clone-39ef3.firebaseapp.com",
  projectId: "olx-clone-39ef3",
  storageBucket: "olx-clone-39ef3.appspot.com",
  messagingSenderId: "825269203254",
  appId: "1:825269203254:web:449b80ca4757bd78d84397",
  measurementId: "G-DZY8EMG6TV"
};

export default firebase.initializeApp(firebaseConfig)
 



