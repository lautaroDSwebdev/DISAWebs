import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Tilt from 'react-parallax-tilt';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const VentajasNegocio = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const info = useContext(langCotext)
    if (!info) return null
    const data = info.data.ids_component
    useEffect(() => {
        gsap.from(".div_ventajas ", {
            scrollTrigger: {
                trigger: ".div_ventajas ",
                // start: 50
                toggleActions: "restart"
            },
            opacity: 0,
            y: -50,
            duration: 2,
        })
        gsap.to(".div_ventajas ", {
            scrollTrigger: {
                trigger: ".div_ventajas ",
                // start: 50
                toggleActions: "play"
            },
            opacity: 1,
            y: 0,
            duration: 2,
        })

    }, [])
    return (
        <article className='article_ventajas g-padding-top-sections'>
            <div className='ball-blur-purple'></div>
            <section id={data[2]} className='div_center section_ventajas g-maxwidth-page'>
                <h2>{info?.data.ventajasSection.titulo}</h2>
                <div className='div_ventajas'>
                    {info?.data.ventajasSection.razones.map(e => (
                        <Tilt key={e.id} className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={2500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}>
                            <ul className='border-box-line-blue  ul_ventajas ' >
                                <b>{e.titulo_razon}</b>
                                <p>{e.sub_titulo}</p>
                            </ul>
                        </Tilt>
                    ))}
                    {info?.data.ventajasSection.razones.map(e => (
                        <ul className='border-box-line-blue  ul_ventajas g-card-animated-mobile' key={e.id}>
                            <b>{e.titulo_razon}</b>
                            <p>{e.sub_titulo}</p>
                        </ul>
                    ))}
                </div>
            </section>
        </article>
    )
}
