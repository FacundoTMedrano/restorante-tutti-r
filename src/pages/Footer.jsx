import React from 'react'
import { IKImage } from 'imagekitio-react'
import datos from '../datos'
export default function Footer() {
    return (
        <footer className='Footer'>
            <figure className='FooterLogo'>
                <IKImage
                    urlEndpoint={datos.urlEndpoint}
                    path={datos.logoNav}
                />
                <figcaption>Tutto Rico</figcaption>
            </figure>
            <div className='FooterIconos'>
                <ul>
                    <li>
                        <IKImage
                            urlEndpoint={datos.urlEndpoint}
                            path={datos.footer.igLogo}
                        />
                    </li>
                    <li>
                        <IKImage
                            urlEndpoint={datos.urlEndpoint}
                            path={datos.footer.fbLogo}
                        />
                    </li>
                    <li>

                        <IKImage
                            urlEndpoint={datos.urlEndpoint}
                            path={datos.footer.twLogo}
                        />
                    </li>
                </ul>
            </div>
            <p>&copy;2022 by Tutto Rico - Todos los derechos reservados</p>
        </footer>
    )
}
