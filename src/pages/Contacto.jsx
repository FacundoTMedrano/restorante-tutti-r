import React from 'react'
import { useState } from 'react';

export default function Contacto() {
    const datos = {
        nombre: "",
        email: "",
        telefono: "",
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

    const submit = (e)=>{
        e.preventDefault();
    }
    

    return (
        <div className='contacPage'>
            <p>¿Tienes alguna sugerencia? Tutto Rico está para ayudarte, ¡Déjanos tu mensaje y nos comunicaremos a la brevedad!</p>
            <form>
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
                <textarea
                    onChange={cambios}
                    value={datosForm.mensaje}
                    name="mensaje"
                    placeholder='Mensaje'
                />
                <button onClick={submit}>enviar</button>
            </form>
        </div>
    )
}
