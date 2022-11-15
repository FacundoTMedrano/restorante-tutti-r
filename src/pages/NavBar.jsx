import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { IKImage } from 'imagekitio-react'
import datos from "../datos"
import Up from '../hooks/Up'
export default function NavBar() {

    const goUp = Up()
    return (
        <div className='navegacionDiv'>
            <div className='navFixi'>
                <div className='navImg'>
                    <NavLink to={"/"} onClick={() => goUp("/")}>
                        <IKImage
                            urlEndpoint={datos.urlEndpoint}
                            path={datos.logoNav}
                        />
                    </NavLink>
                </div>
                <div className='navLinks'>
                    <NavLink to={"/"} onClick={() => goUp("/")}>
                        <h1>Inicio</h1>
                    </NavLink>
                    <NavLink to={"/comidas"} onClick={() => goUp("/comidas")}>
                        <h1>Comidas</h1>
                    </NavLink>
                    <NavLink to={"/contacto"} onClick={() => goUp("/contacto")}>
                        <h1>Contacto</h1>
                    </NavLink>
                    <NavLink to={"/catering"} onClick={() => goUp("/catering")}>
                        <h1>Catering</h1>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
