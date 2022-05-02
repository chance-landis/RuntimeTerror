import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
// // Firebase SDK imports
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC64jKCQEN6kNN3Xx_I7XebAp20pebyoTs",
//   authDomain: "block-health-18735.firebaseapp.com",
//   projectId: "block-health-18735",
//   storageBucket: "block-health-18735.appspot.com",
//   messagingSenderId: "455480969643",
//   appId: "1:455480969643:web:8ad00685c62078aafeeaee",
//   measurementId: "G-VVHJWY8GP8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
