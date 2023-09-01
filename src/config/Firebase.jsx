import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHC6K6yfEoIISLPOKvkVnZxcAFBmqMpxg",
  authDomain: "fake-music-store.firebaseapp.com",
  projectId: "fake-music-store",
  storageBucket: "fake-music-store.appspot.com",
  messagingSenderId: "762795609215",
  appId: "1:762795609215:web:7c1c63b69f05d9ec89434a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);