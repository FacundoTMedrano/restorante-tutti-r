import React from 'react'
import { IKImage } from "imagekitio-react";
import datos from "../datos"

export default function Comidas() {

  const colocar = datos.comidas.map((x, i) => {
    return (
      <div key={i} className="divComida">
        <IKImage
          className='imgComida'
          urlEndpoint={datos.urlEndpoint}
          path={x.url}
          transformation={[{ "w": "600", "h": "400" }]}
          width="300px"
        />
        <h2>{x.nombre}</h2>
        <p>{x.descr}</p>
        <p>{x.precio}</p>
      </div>
    )
  })
  return (
    <div className='contComidas'>
      {colocar}
    </div>
  )
}
