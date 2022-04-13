// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWNGMuB7lz8hoJON8arN_3tFPlhCuPL1E",
  authDomain: "genius-car-services-418b1.firebaseapp.com",
  projectId: "genius-car-services-418b1",
  storageBucket: "genius-car-services-418b1.appspot.com",
  messagingSenderId: "1004364705809",
  appId: "1:1004364705809:web:a9ffbee106d67bd63e81b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;