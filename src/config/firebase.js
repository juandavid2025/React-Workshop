import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyB5-n4b3PywhWS9Oh-x4l6mEajwHyDFyag",
//     authDomain: "homeworkreact.firebaseapp.com",
//     projectId: "homeworkreact",
//     storageBucket: "homeworkreact.appspot.com",
//     messagingSenderId: "271009849954",
//     appId: "1:271009849954:web:64c513c72d4b255a52e73b"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// -------------------------------------- auth ---------------------------------

      const config = firebase.initializeApp({
        apiKey: "AIzaSyCDEts4uM9dP86P_VaRqQcVw5yqEbSbhSA",
        authDomain: "react-auth-c09ee.firebaseapp.com",
        projectId: "react-auth-c09ee",
        storageBucket: "react-auth-c09ee.appspot.com",
        messagingSenderId: "388256617366",
        appId: "1:388256617366:web:99c328f281bb6b8c4f83b7",
      })
      const firestore = config.firestore()

export const auth = config.auth()
export const db = {
      sedes:firestore.collection("sedes"),
      usuarios:firestore.collection("usuarios"),
}
export default config