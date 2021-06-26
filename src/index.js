import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar/navbar';
import Cart from './cart/cart';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
);

