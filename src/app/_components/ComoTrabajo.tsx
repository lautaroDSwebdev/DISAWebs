import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'
import Tilt from 'react-parallax-tilt';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
export const ComoTrabajo = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const info = useContext(langCotext)
    if (!info) return null
    const data = info?.data.comoTrabajo
    const id_comeback = info?.data.ids_component
     useEffect(()=> {
    
    
            gsap.from(".article_how-work  ", {
                scrollTrigger: {
                    trigger: ".article_how-work  ",
                    // start: 50
                    toggleActions: "restart"
                },
                opacity: 0,
                x: -50,
                duration: 2,
            })
            gsap.to(".article_how-work  ", {
                scrollTrigger: {
                    trigger: ".article_how-work  ",
                    // start: 50
                    toggleActions: "play"
                },
                opacity: 1,
                x: 0,
                duration: 2,
            })
    
    
    
        },[])
    return (

        <article id={`${id_comeback[6]}`} className='article_how-work g-maxwidth-page g-padding-top-sections'>
            <div className='div_how-work'>
                <h2>¿{data.titulo}?</h2>
            </div>

                <section className='border-box-line-blue-how-work section_details'>
                    <section className='blur-blue-how-work'></section>

                    <div className='section-div_details'>
                        <p className='g-subtitle-texts'>{data.box_titulo}</p>
                    </div>
                    <ul className='ul_details-array'>
                        {
                            data.así_trabajo_array.map(e => (
                                <div key={e.id}>
                                    <img src={e.img} alt="icono" />
                                    <p className='g-subtitle-texts'>{e.data}</p>
                                </div>
                            ))
                        }
                    </ul>
                </section>
           
        </article>
    )
}
