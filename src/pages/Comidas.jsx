import React from 'react'
import datos from "../datos"
import { Outlet, Link } from "react-router-dom"
export default function Comidas() {

  const agrupar = ["Todo", ...Object.values(datos.grupos)]
  const navGroups = agrupar.map((x, i) => {
    return (
      <li key={i}>
        <Link to={x === "Todo" ? "/comidas" : x}>{x}</Link>
      </li>
    )
  })

  return (
    <div className='comidaCont'>
      <div className='comidaNavSpace'>
        <div className='comidaNavFixie'>
          <ul>
            {navGroups}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
