import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- Nota il /client qui!
import './index.css';
import App from './App';

// 1. Crea la "radice" dell'app
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Mostra l'app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);