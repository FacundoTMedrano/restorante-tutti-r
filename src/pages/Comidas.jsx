import React from 'react'
import datos from "../datos"
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import Up from '../hooks/Up'

export default function Comidas() {

  const goUp = Up();
  const navegar = useNavigate();
  const agrupar = ["Todo", ...Object.values(datos.grupos)]
  const navGroups = agrupar.map((x, i) => {
    return (
      <li key={i}>
        {x === "Todo" ?
          <Link to={"/comidas"} onClick={() => goUp("/comidas")}>{x}</Link> :
          <Link to={x} onClick={() => goUp(`/comidas/${x}`)}>{x}</Link>}
      </li>
    )
  })

  const sumarNeg = ["Seleccionar",...agrupar]

  const opciones = sumarNeg.map((x, i) => {
    return (
      <option key={i} value={x}>{x}</option>
    )
  })

  const cambios = (e) => {
    navegar(`${e.target.value}`)
  }
  
  return (
    <div className='comidaCont'>
      <div className='comidaNavSpace'>
        <div className='comidaNavFixie'>
          <ul className='navComidasBig'>
            {navGroups}
          </ul>
          <select onChange={cambios} name="comida" id="comidas">
            {opciones}
          </select>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
