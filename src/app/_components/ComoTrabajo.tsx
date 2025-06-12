import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'

export const ComoTrabajo = () => {
    const info = useContext(langCotext)
    if (!info) return null
    const data = info?.data.comoTrabajo
    return (
        <article id='Como Trabajo' className='article_how-work g-maxwidth-page'>
            <div className='div_how-work'>
                <h2>¿{data.titulo}?</h2>
            </div>

            <section className='border-box-line-blue-how-work section_details'>
                <div className='section-div_details'>
                    <p>{data.box_titulo}</p>
                </div>
                <ul className='ul_details-array'>
                    {
                        data.así_trabajo_array.map(e => (
                            <div key={e.id}>
                                <img src={e.img} alt="icono" />
                                <p>{e.data}</p>
                            </div>
                        ))
                    }
                </ul>
            </section>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Return />

            </div>
        </article>
    )
}
