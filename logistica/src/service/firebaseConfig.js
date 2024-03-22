import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATQqUDIKJuUlsYHMY8PBBTz-C8A3P_qAM",
  authDomain: "blog-d5ad4.firebaseapp.com",
  projectId: "blog-d5ad4",
  storageBucket: "blog-d5ad4.appspot.com",
  messagingSenderId: "261287049994",
  appId: "1:261287049994:web:e6b689c3632b3df26258f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app)

export { auth };
export { db};