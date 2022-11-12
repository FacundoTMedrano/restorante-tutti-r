import React from 'react'
import { NavLink } from "react-router-dom"
import { IKImage } from 'imagekitio-react'
import datos from "../datos"
export default function NavBar() {
    return (
        <div className='navegacionDiv'>
            <div className='navFixi'>
                <div className='navImg'>
                    <IKImage
                        urlEndpoint={datos.urlEndpoint}
                        path={datos.logoNav}
                    />
                </div>
                <div className='navLinks'>
                    <NavLink to={"/"}>
                        <h1>Inicio</h1>
                    </NavLink>
                    <NavLink to={"/comidas"}>
                        <h1>Comidas</h1>
                    </NavLink>
                    <NavLink to={"/contacto"}>
                        <h1>Contacto</h1>
                    </NavLink>
                    <NavLink to={"/catering"}>
                        <h1>Catering</h1>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
