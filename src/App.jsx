import React from 'react'
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Contacto from './pages/Contacto'
import Catering from './pages/Catering'
import Comidas from './pages/Comidas'
import ComidaModal from './pages/ComidaModal'
import ComidaModalGrupo from './pages/ComidaModalGrupo'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/comidas' element={<Comidas />}>
        <Route index element={<ComidaModal />} />
        <Route path=':grupo' element={<ComidaModalGrupo />} />
      </Route>
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/catering' element={<Catering />} />
    </Routes>
  )
}
