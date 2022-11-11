import React from 'react'
import { IKImage } from 'imagekitio-react'
import datos from '../datos'
export default function Inicio() {
  return (
    <section>
      <h1>SOMOS Tutto Rico</h1>
      <p>
        Somos una experiencia de hospitalidad y gastronomía Argentina. Empezamos en 2003 y desde entonces, nos dedicamos a cocinar tus platillos favoritos, recibiéndote siempre, en un ambiente casual y divertido. Cada día, seleccionamos los mejores ingredientes de proveedores locales y extranjeros responsables con el medio ambiente. Trabajamos en equipo para tocar positivamente la vida de nuestros compañeros e invitados con procesos seguros, excelente servicio y pasión culinaria. Nos mueve aprender, enseñar y descubrir para crecer. Creemos en aprovechar lo que recibimos para convertirlo en algo mejor. Sobre todas las cosas, siempre queremos que la pases bien comiendo y bebiendo delicioso con nosotros. Descubre todo nuestro menú sorprendiéndote con algo nuevo cada vez.
      </p>
      <IKImage
        urlEndpoint={datos.urlEndpoint}
        path={datos.logoNav}
        width="200px"
      />
    </section>
  )
}
