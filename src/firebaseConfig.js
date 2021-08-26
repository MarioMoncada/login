import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4_v4J_NkVhqoyg2Dowf8X6lsvsuBLdOw",
  authDomain: "login-2cccf.firebaseapp.com",
  projectId: "login-2cccf",
  storageBucket: "login-2cccf.appspot.com",
  messagingSenderId: "81918442804",
  appId: "1:81918442804:web:965f88c8b50635882eb961",
};
const app = firebase.initializeApp(config);
export default app;
