import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsiM5Pw00IAbkY3xrPu9wwqLMi20hNPcQ",
  authDomain: "geteducators.firebaseapp.com",
  projectId: "geteducators",
  storageBucket: "geteducators.appspot.com",
  messagingSenderId: "381354117412",
  appId: "1:381354117412:web:5ebb256beb697a2468cbb1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth,provider }