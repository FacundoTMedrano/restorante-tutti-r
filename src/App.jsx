import React from 'react'
import { Routes, Route } from "react-router-dom"
import Comidas from './pages/Comidas'
import Inicio from "./pages/Inicio"
import Contacto from './pages/Contacto'
import Catering from './pages/Catering'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/comidas' element={<Comidas />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/catering' element={<Catering />} />
    </Routes>
  )
}
