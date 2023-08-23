import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiF2PDDPXV_44M8tBLkRA1Isar8DIZJAU",
  authDomain: "fire-contact-euro-ts.firebaseapp.com",
  databaseURL: "https://fire-contact-euro-ts-default-rtdb.firebaseio.com",
  projectId: "fire-contact-euro-ts",
  storageBucket: "fire-contact-euro-ts.appspot.com",
  messagingSenderId: "180488910574",
  appId: "1:180488910574:web:649d67e7cec731ebe465ff"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
