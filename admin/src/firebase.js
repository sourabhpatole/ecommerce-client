import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDz6rRXB2Mzn4y009NEfhWZopX8zI9nHpM",
  authDomain: "netflix-ff0a5.firebaseapp.com",
  projectId: "netflix-ff0a5",
  storageBucket: "netflix-ff0a5.appspot.com",
  messagingSenderId: "475971754971",
  appId: "1:475971754971:web:77fdcd356ce1ce4c73a5fe",
  measurementId: "G-2GNPFM0RDL",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
