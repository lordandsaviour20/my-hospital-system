import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './pages/NavigationBar';
import App from './App';
import Footer from './Footer'
import index from './index.css'
import Home from './pages/Home Page/Home.css'
import About from './pages/About Page/About.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <NavBar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
