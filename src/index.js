import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Firebase

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEmcxXCBMyQ4x6KsUp4A-_12Q5yJPGz28",
  authDomain: "airjordan-react.firebaseapp.com",
  projectId: "airjordan-react",
  storageBucket: "airjordan-react.appspot.com",
  messagingSenderId: "915901741706",
  appId: "1:915901741706:web:9b1fad961e40a53a9d4b73"
};

// Inicio Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
