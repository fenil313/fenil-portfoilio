// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import { NavbarProvider } from './context/NavbarContext'; // Ensure this matches!
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </GlobalProvider>
  </React.StrictMode>
);