// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- added Firestore import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX53ROjnmtFr-ZlG8z-ZeYTFvy3Rik_W4",
  authDomain: "collegepreapp.firebaseapp.com",
  projectId: "collegepreapp",
  storageBucket: "collegepreapp.appspot.com", // fixed
  messagingSenderId: "687167075510",
  appId: "1:687167075510:web:c4f1f0081e9ab53d9d6217",
  measurementId: "G-MKF91JRJZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // <-- initialize Firestore

// Export app, auth, db
export { app, auth, db };
