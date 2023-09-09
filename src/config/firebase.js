import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz0VjZsv5yysEGoeJPzrnE3JJPT-7TXLo",
  authDomain: "todo-app-c0004.firebaseapp.com",
  projectId: "todo-app-c0004",
  storageBucket: "todo-app-c0004.appspot.com",
  messagingSenderId: "961796772826",
  appId: "1:961796772826:web:323822a142d5b1ac6aa6e3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
