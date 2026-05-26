import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import App from './App';
import Footer from './Footer'
import index from './index.css'
import Home from './pages/Home Page/Home.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
