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
            <div className='TextoContact'>
                <h1>Contáctanos</h1>
                <p>¿Tienes alguna sugerencia? Tutto Rico está para ayudarte,
                    <br />
                    ¡Déjanos tu mensaje y nos comunicaremos a la brevedad!</p>
            </div>
            <form className='formContact'>
                <div>
                    <input
                        type="text"
                        onChange={cambios}
                        value={datosForm.nombre}
                        name="nombre"
                        placeholder='Nombre'
                        id='formName'
                    />
                    <input
                        type="email"
                        onChange={cambios}
                        value={datosForm.email}
                        name="email"
                        placeholder='Email'
                        id='formEmail'
                    />
                </div>
                <textarea
                    onChange={cambios}
                    value={datosForm.mensaje}
                    name="mensaje"
                    placeholder='Mensaje'
                    id='formMsg'
                />
                <button id='formButton' onClick={submit}>enviar</button>
            </form>
        </div>
    )
}
