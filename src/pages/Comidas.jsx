import React from 'react'
import datos from "../datos"
import { Outlet, Link } from "react-router-dom"
import Up from '../hooks/Up'

export default function Comidas() {

  const goUp = Up();

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
