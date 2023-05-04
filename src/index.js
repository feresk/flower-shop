
import React from 'react'
import ReactDOM from 'react-dom'
import Shop from './pages/Shop.js'
import Home from './pages/Home.js'
import App from './App.js'
import { BrowserRouter } from "react-router-dom";
import './style.css'
// ReactDOM.render(
//     <Shop />,
//    document.getElementById("root"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
