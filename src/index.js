import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// Rendering the App component inside the root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
