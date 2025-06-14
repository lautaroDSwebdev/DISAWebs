import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'

export const Main = () => {
    const info = useContext(langCotext)
    if(!info) return null
    const data = info.data.ids_component
    return (
        <div id={data[1]} className='div_center g-maxwidth-page'>
            <h2>¿{info?.data.ayudarte[0]} <i className='text-blue'>{info?.data.ayudarte[1]}</i>?</h2>
            <p className='g-subtitle-texts'>{info?.data.ayudarte[2]}</p>
            <section className='grid_help'>
                {
                    info?.data.grid_ayudarte.map(e => (
                        <div className='border-box-line-white size_box' key={e.id}>
                            <div className='blur_boxes'></div>

                                <p className='g-subtitle-texts'>{e.data}</p>

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
