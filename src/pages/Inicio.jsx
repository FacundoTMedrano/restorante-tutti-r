import React from 'react'
import { IKImage } from 'imagekitio-react'
import datos from '../datos'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

export default function Inicio() {

  const imgs = datos.portada.map((x, i) => {
    console.log(`${datos.urlEndpoint}/${x}`)
    return (
      <SwiperSlide key={i}
        className="SliceDivImg"
        style={{
          backgroundImage: `url(${datos.urlEndpoint}/tr:h-500,w-1000/${x})`
        }}>
      </SwiperSlide>
    )
  })

  return (
    <section>
      <div className='contWiper'>
        <Swiper
          className="mySwiper"
          speed={1200}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
          navigation={true}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {imgs}
        </Swiper>
      </div>
      <div className='divFlexTuttoRico'>
        <div className='SomosTuttoRico'>
          <h1>SOMOS TUTTO RICO</h1>
          <p>
            Una experiencia de hospitalidad y gastronomía Argentina. Empezamos en 2003 y desde entonces, nos dedicamos a cocinar tus platillos favoritos, recibiéndote siempre, en un ambiente casual y divertido. Cada día, seleccionamos los mejores ingredientes de proveedores locales y extranjeros responsables con el medio ambiente. Trabajamos en equipo para tocar positivamente la vida de nuestros compañeros e invitados con procesos seguros, excelente servicio y pasión culinaria. Nos mueve aprender, enseñar y descubrir para crecer. Creemos en aprovechar lo que recibimos para convertirlo en algo mejor. Sobre todas las cosas, siempre queremos que la pases bien comiendo y bebiendo delicioso con nosotros. Descubre todo nuestro menú sorprendiéndote con algo nuevo cada vez.
          </p>
        </div>
      </div>
      <div className='eventoInicio'>
        <div className='imgLinkCatering'></div>
        <div className='textoLinkCatering'>
          <h2>¿Tienes un evento?</h2>
          <p>Cotiza con nosotros</p>
          <Link to={"/catering"}>Cotiza aqui</Link>
        </div>
      </div>
    </section>
  )
}
