// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaTlcp4NAdp4V0BhBxDvmJ5qZxodt-nJ8",
  authDomain: "ema-john-simple-f56af.firebaseapp.com",
  projectId: "ema-john-simple-f56af",
  storageBucket: "ema-john-simple-f56af.appspot.com",
  messagingSenderId: "1033229744676",
  appId: "1:1033229744676:web:b648e60fe6b80e4ae276b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;