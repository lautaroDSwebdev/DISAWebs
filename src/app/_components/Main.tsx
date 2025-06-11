import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'

export const Main = () => {
    const info = useContext(langCotext)
    return (
        <div id='Ayudarte' className='div_center g-maxwidth-page'>
            <h2>¿{info?.data.ayudarte[0]} <i className='text-blue'>{info?.data.ayudarte[1]}</i>?</h2>
            <p>{info?.data.ayudarte[2]}</p>
            <section className='grid_help'>
                {
                    info?.data.grid_ayudarte.map(e => (
                        <div className='border-box-line-white ' key={e.id}>
                            <div className='blur_boxes'></div>

                                <p className=''>{e.data}</p>

                            <div className='div_img'>
                                <img src={e.img} alt="imagen" />
                            </div>
                        </div>
                    ))
                }
            </section>
           <Return/>
        </div>
    )
}
