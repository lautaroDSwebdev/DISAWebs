import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Return = () => {
    const info = useContext(langCotext)
    return (
        <div className='div_btn_regresar'>
            <a href='#inicio'>{info?.data.regresar}</a>
        </div>
    )
}
