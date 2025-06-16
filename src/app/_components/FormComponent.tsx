import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const FormComponent = () => {

const info = useContext(langCotext)
    if (!info) return null
    const form_info = info.data.form,
    id_contact = info.data.ids_component
    return (
        <div id={id_contact[8]} className='g-maxwidth-page'>
            <h2>Consultanos</h2>
            <form className=' border-box-line-blue-form blur-blue-how-work' action="">
                <label htmlFor="nombre">{form_info.label[0]}</label>
                <input id='nombre' type="text" />
                <label htmlFor="mail">{form_info.label[1]}</label>
                <input id='mail' type="text" />
                <label htmlFor="telefono">{form_info.label[2]}</label>
                <input id='telefono' type="text" />
                <label htmlFor="plan">{form_info.label[3]}</label>
                <select >
                    <option value={form_info.opcions[0]}>{form_info.opcions[0]}</option>
                    <option value={form_info.opcions[1]}>{form_info.opcions[1]}</option>
                    <option value={form_info.opcions[2]}>{form_info.opcions[2]}</option>
                </select>
                <textarea placeholder={form_info.textArea} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
