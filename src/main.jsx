import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CartProvider from './component/context/Cartcontext.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
