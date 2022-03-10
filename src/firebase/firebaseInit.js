import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBF4f_bg1hfLVrg4dujkoIGu8cZSYnOq6s",
    authDomain: "fireglt.firebaseapp.com",
    projectId: "fireglt",
    storageBucket: "fireglt.appspot.com",
    messagingSenderId: "299739230122",
    appId: "1:299739230122:web:7cbcda27e2564bd0c8c5d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
  