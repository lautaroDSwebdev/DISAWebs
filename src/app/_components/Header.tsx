"use client"
import React, { useContext, useEffect, useRef } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";


export const Header = () => {
    gsap.registerPlugin(useGSAP, SplitText);


    useEffect(() => {
       
        // gsap.from(".header_section", {
        //     y: -100,
        //     opacity: 0,
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: ".header_section",
        //         start: 150
        //     }
        // })
        gsap.from(".blur-blue-left-header", {
            // opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".texto_animado",
                start: 150
            }
        })
        gsap.from(".texto_animado", {
            // opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".texto_animado",
                start: 150
            }
        })
        gsap.from(".texto_animado2", {
            opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".texto_animado1",
                start: 150
            }
        })

        gsap.from(".image", {
            opacity: 0,
            duration: 2.5,
            delay: 1,
            x: -50,
            scrollTrigger: {
                trigger: ".image",
                // start: 150
            }
        })
        gsap.to(".image", {
            opacity: 1,
            duration: 2.5,
            x: 0,
            scrollTrigger: {
                trigger: ".image",
                // start: 150
            }
        })

    }, [])
    const info = useContext(langCotext)
    if (!info) return null
    const data = info.data.ids_component
    return (
        <article>
            {/* <div className='blur-blue-left-header '></div> */}
            <div className='ball-blur-purple-right-header '></div>

            <section id={data[0]} className='header_section g-maxwidth-page '>
                <div className='texto_div'>
                    <h1 className='texto_animado'>{info?.data.destacaHeader[0]}</h1>
                    <p className='texto_animado'>{info?.data.destacaHeader[1]}</p>
                </div>
                <div>
                    <img className='image' src="/logo-pagina-png.png" alt="imagen" />
                </div>
            </section>
        </article>
    )
}
