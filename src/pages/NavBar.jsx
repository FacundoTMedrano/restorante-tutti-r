import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
// import tuttoLogo from "../assets/tuttoLogo.svg"
import { IKImage } from 'imagekitio-react'
import datos from "../datos"
export default function NavBar() {
    const ubicacion = useLocation();
    return (
        <div className='navegacionDiv'>
            <div className='navFixi'>
                <IKImage
                    urlEndpoint={datos.urlEndpoint}
                    path={datos.logoNav}
                    width="40px"
                />
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
    )
}
