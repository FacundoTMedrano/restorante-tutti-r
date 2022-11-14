import React from 'react'
import { useState } from 'react';
import { IKImage } from "imagekitio-react";
import * as imagenes from '../datos';
export default function Catering() {
  const datos = {
    nombre: "",
    email: "",
    telefono: "",
    ocacion: "",
    cantidadPersonas: "",
    horario: "",
    mensaje: "",
    fecha: ""
  }
  const [datosForm, setDatosForm] = useState(datos);
  const cambios = (e) => {
    const { name, value } = e.target;
    setDatosForm(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='contacPage'>
      <div className='contImgText'>
        <div className='imgCatering'></div>
        <div className='textoCatering'>
          <p>¿Te gustaría que fuésemos parte de tu evento? </p>
          <p>¡Cotiza con nosotros!</p>
        </div>
      </div>
      <div className='contFormCat'>
        <form className='formCatering'>
          <input
            type="text"
            onChange={cambios}
            value={datosForm.nombre}
            name="nombre"
            placeholder='Nombre'
          />
          <input
            type="email"
            onChange={cambios}
            value={datosForm.email}
            name="email"
            placeholder='Email'
          />
          <input
            type="tel"
            onChange={cambios}
            value={datosForm.telefono}
            name="telefono"
            placeholder='Telefono'
          />
          <input
            type="date"
            onChange={cambios}
            value={datosForm.fecha}
            name='fecha'
          />
          <input
            type="text"
            onChange={cambios}
            value={datosForm.ocacion}
            name="ocacion"
            placeholder='ocacion'
          />
          <input
            type="text"
            onChange={cambios}
            value={datosForm.cantidadPersonas}
            name="cantidadPersonas"
            placeholder='cantidadPersonas'
          />
          <input
            type="text"
            onChange={cambios}
            value={datosForm.horario}
            name="horario"
            placeholder='horario'
          />
          <textarea
            onChange={cambios}
            value={datosForm.mensaje}
            name="mensaje"
            placeholder='Mensaje'
          />
          <button onClick={submit}>enviar</button>
        </form>
      </div>
    </div>
  )
}
