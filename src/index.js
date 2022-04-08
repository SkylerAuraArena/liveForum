import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

console.log("%cIndex.js", 'background: black; color: white;')

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);