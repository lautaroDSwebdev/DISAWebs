import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Section_ventajas_negocio = () => {
    const info = useContext(langCotext)

    return (
        <section id='¿Por que una web?' className='div_center'>
            <h2>{info?.data.ventajasSection.titulo}</h2>
            <div className='div_ventajas'>
                {info?.data.ventajasSection.razones.map(e => (
                    <ul className='border-box-line-blue g-maxwidth-page ul_ventajas' key={e.id}>
                        <b>{e.titulo_razon}</b>
                        <p>{e.sub_titulo}</p>
                    </ul>
                ))}

            </div>
        </section>
    )
}
