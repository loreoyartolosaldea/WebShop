import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF1EI0OYOJ3rZrLlX_alnD0K1LCGHNJww",
  authDomain: "lau-oin.firebaseapp.com",
  projectId: "lau-oin",
  storageBucket: "lau-oin.firebasestorage.app",
  messagingSenderId: "1022801231679",
  appId: "1:1022801231679:web:a082f25899897a220c1d8a",
  measurementId: "G-H5MXWS1R2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
