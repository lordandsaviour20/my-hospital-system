import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import App from './App';
import index from './index.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
