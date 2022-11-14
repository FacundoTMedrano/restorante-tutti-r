import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import NavBar from "./pages/NavBar"
import Footer from "./pages/Footer"
import Wrapper from "./pages/Wrapper"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Wrapper>
      <NavBar />
      <App />
      <Footer />
    </Wrapper>
  </BrowserRouter>
)
