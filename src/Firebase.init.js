// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkrn65fZzLvUQcK7OjXPjXzVcfuHSul0",
  authDomain: "gym-equipment2.firebaseapp.com",
  projectId: "gym-equipment2",
  storageBucket: "gym-equipment2.appspot.com",
  messagingSenderId: "730687421182",
  appId: "1:730687421182:web:b76e38d22a1c85ec3c43af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
