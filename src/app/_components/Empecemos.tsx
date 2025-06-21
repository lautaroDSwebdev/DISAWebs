import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

export const Empecemos = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const info = useContext(langCotext)
    if (!info) return null
    const empecemos = info.data.comencemos
    const empecemos_id = info.data.ids_component
    useEffect(()=> {


        gsap.from(".section_comencemos  ", {
            scrollTrigger: {
                trigger: ".section_comencemos  ",
                // start: 50
                toggleActions: "restart"
            },
            opacity: 0,
            y: -50,
            duration: 2,
        })
        gsap.to(".section_comencemos  ", {
            scrollTrigger: {
                trigger: ".section_comencemos  ",
                // start: 50
                toggleActions: "play"
            },
            opacity: 1,
            y: 0,
            duration: 2,
        })



    },[])
    return (
        <div className='g-padding-top-sections'>

            <section className='section_comencemos '>
                {/* <div className='blur-ball-comencecemos'></div> */}

                <div id={`${empecemos_id[4]}`} className='div_comencemos g-maxwidth-page'>
                    <section className='section_data_comencemos'>
                        <div className='titulo'>
                            <h3>{empecemos.titulo}</h3>
                        </div>
                        <div className='redes'>
                            {
                                empecemos.array_redes.map(e => (
                                    <a className='g-element-scale-transition' key={e.id} href={e.href} target='_blank' >{e.data}

                                        {e.data === "mi whatsapp" ? <FaSquareWhatsapp /> : <FaSquareInstagram />}
                                    </a>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
