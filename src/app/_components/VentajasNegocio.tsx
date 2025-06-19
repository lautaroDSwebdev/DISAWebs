import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Tilt from 'react-parallax-tilt';
export const VentajasNegocio = () => {
    gsap.registerPlugin(useGSAP, SplitText);
    const info = useContext(langCotext)
    if (!info) return null
    const data = info.data.ids_component
    useEffect(() => {
        gsap.from(".ball-blur-purple", {
            opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".ball-blur-purple",
                start: 150
            }
        })

    }, [])
    return (
        <article className='article_ventajas '>
            <div className='ball-blur-purple'></div>
            <section id={data[2]} className='div_center section_ventajas g-maxwidth-page'>
                <h2>{info?.data.ventajasSection.titulo}</h2>
                <div className='div_ventajas'>
                    {info?.data.ventajasSection.razones.map(e => (
                        <Tilt className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={2500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}>

                            <ul className='border-box-line-blue  ul_ventajas ' key={e.id}>
                                <b>{e.titulo_razon}</b>
                                <p>{e.sub_titulo}</p>
                            </ul>
                        </Tilt>
                    ))}
                    {info?.data.ventajasSection.razones.map(e => (
                            <ul className='border-box-line-blue  ul_ventajas ' key={e.id}>
                                <b>{e.titulo_razon}</b>
                                <p>{e.sub_titulo}</p>
                            </ul>
                    ))}

                </div>
               
            </section>
        </article>
    )
}
