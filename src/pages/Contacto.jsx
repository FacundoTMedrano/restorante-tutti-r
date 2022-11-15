import React from 'react'
import { useState } from 'react';

export default function Contacto() {
    const datos = {
        nombre: "",
        email: "",
        mensaje: ""
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
            <div className='contactoImgText'>
                <div className='imgContacto'></div>
                <div className='TextoContact'>
                    <h1>Contáctanos</h1>
                    <p>¿Tienes alguna sugerencia? Tutto Rico está para ayudarte,
                        <br />
                        ¡Déjanos tu mensaje y nos comunicaremos a la brevedad!</p>
                </div>
            </div>
            <div className='divContFormCont'>
                <form className='formContact'>
                    <input
                        type="text"
                        onChange={cambios}
                        value={datosForm.nombre}
                        name="nombre"
                        placeholder='Nombre'
                        required
                        id='formName'
                    />
                    <input
                        type="email"
                        onChange={cambios}
                        value={datosForm.email}
                        name="email"
                        placeholder='Email'
                        required
                        id='formEmail'
                    />
                    <textarea
                        onChange={cambios}
                        value={datosForm.mensaje}
                        name="mensaje"
                        placeholder='Mensaje'
                        required
                        id='formMsg'
                    />
                    <button id='formButton' onClick={submit}>enviar</button>
                </form>
            </div>
        </div>
    )
}
