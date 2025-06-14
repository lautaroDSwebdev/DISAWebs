import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Return = () => {
    const info = useContext(langCotext)
    if(!info) return null
    const id_inicio  = info?.data.ids_component
    return (
        <div className='div_btn_regresar'>
            <a href={`#${id_inicio[0]}`}>{info?.data.regresar}</a>
        </div>
    )
}
