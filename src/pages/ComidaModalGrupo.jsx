import React from 'react'
import { useParams } from 'react-router-dom'
import { IKImage } from 'imagekitio-react';
import datos from '../datos';

export default function ComidaModalGrupo() {
    const dato = useParams(":grupo");
    const busqueda = datos.comidas.filter(x => x.grupo === dato.grupo)
    let result;
    if (busqueda.length) {
        result = busqueda.map((x, i) => {
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
    } else {
        result = <p>sin comida para mostrar</p>
    }

    return (
        <div className='contComidas'>
            {result}
        </div>
    )
}
