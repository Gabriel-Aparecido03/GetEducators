import { GoogleAuthProvider,getAuth, FacebookAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvIrXO9gphDKkpfY26t3aDk3L0WfAIvr0",
  authDomain: "educators-75a5e.firebaseapp.com",
  projectId: "educators-75a5e",
  storageBucket: "educators-75a5e.appspot.com",
  messagingSenderId: "45167593295",
  appId: "1:45167593295:web:5c652a174c62cab766e73a"
};

const app = initializeApp(firebaseConfig)
const providerGoogle = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider()
const auth = getAuth()

const database = getDatabase(app) 

export { providerGoogle,providerFacebook,auth,database } 
