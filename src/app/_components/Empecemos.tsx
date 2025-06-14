import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Empecemos = () => {
    const info = useContext(langCotext)
    if (!info) return null
    const empecemos = info.data.comencemos
    const empecemos_id = info.data.ids_component
    return (
        <div id={`${empecemos_id[4]}`} className='div_comencemos g-maxwidth-page'>
            <section>
                <div className='titulo'>
                    <h2>{empecemos.titulo}</h2>
                </div>
                <div className='redes'>
                    {
                        empecemos.array_redes.map(e => (
                            <a key={e.id} href={e.href} target='_blank' className=''>{e.data} &gt;</a>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
