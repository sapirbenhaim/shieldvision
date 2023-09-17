import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the client module
import './index.css';
import App from './App';

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside a StrictMode component
root.render(
  <React.StrictMode> 
      <App />
  </React.StrictMode>
);
