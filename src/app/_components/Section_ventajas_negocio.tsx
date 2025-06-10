import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Section_ventajas_negocio = () => {
    const info = useContext(langCotext)

    return (
        <section className=''>
            <h3>{info?.data.ventajasSection.titulo}</h3>
            <div>

                {info?.data.ventajasSection.razones.map(e => (
                    <div key={e.id}>
                        <b>{e.titulo_razon}</b>
                        <p>{e.sub_titulo}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}
