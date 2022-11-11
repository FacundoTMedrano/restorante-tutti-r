import React from 'react'
import { IKImage } from 'imagekitio-react'
import datos from '../datos'
export default function Footer() {
    return (
        <div>
            <ul>
                <li>instagram
                    <IKImage
                        urlEndpoint={datos.urlEndpoint}
                        path={datos.footer.igLogo}
                        width="15px"
                    />
                </li>
                <li>facebook
                    <IKImage
                        urlEndpoint={datos.urlEndpoint}
                        path={datos.footer.fbLogo}
                        width="15px"
                    />
                </li>
                <li>
                    twitter
                    <IKImage
                        urlEndpoint={datos.urlEndpoint}
                        path={datos.footer.twLogo}
                        width="15px"
                    />
                </li>
            </ul>
            <p>&copy;2022 by Tutto Rico - Todos los derechos reservados</p>
        </div>
    )
}
