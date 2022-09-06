import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfkiD-NEbe9sIU9_4o9v2eGoO47kwzr8Y",
  authDomain: "react-cart-2e587.firebaseapp.com",
  projectId: "react-cart-2e587",
  storageBucket: "react-cart-2e587.appspot.com",
  messagingSenderId: "879555844612",
  appId: "1:879555844612:web:f85cba9800ea9fb81db351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App app={app} />
  // </React.StrictMode>
);

