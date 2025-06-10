import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Header = () => {

    const info = useContext(langCotext)
    return (
        <section className='header_section g-maxwidth-page '>
            <div>
                <h1>{info?.data.destacaHeader}</h1>
                <p>{info?.data.subHeader}</p>
            </div>
            <div>
                <img src="/logo-pagina-png.png" alt="imagen" />
            </div>
        </section>
    )
}
