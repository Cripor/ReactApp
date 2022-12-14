import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from "./context/cartContext";
import { RouterProvider } from 'react-router-dom';
import { router } from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyxpYFowLcHvhkdUNiGiY39ObwbMRBtp4",
  authDomain: "ecommerce-react-coder-83034.firebaseapp.com",
  projectId: "ecommerce-react-coder-83034",
  storageBucket: "ecommerce-react-coder-83034.appspot.com",
  messagingSenderId: "70710168219",
  appId: "1:70710168219:web:ff0c7d54b245a171ee143e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
