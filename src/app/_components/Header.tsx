"use client"
import React, { useContext, useEffect, useRef } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";


export const Header = () => {
    gsap.registerPlugin(useGSAP, SplitText);

    
    useEffect(() => {
        let texto_div = SplitText.create(".texto_div", {
            type: "chars,words "
        });
        gsap.from(texto_div.chars, {
            y: 50,       // animate from 100px below
            duration: 1,
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger:{
                amount: .8,
                from: "end"
            } // 0.05 seconds between each
        });
        // gsap.from(".header_section", {
        //     y: -100,
        //     opacity: 0,
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: ".header_section",
        //         start: 150
        //     }
        // })
        gsap.from(".texto_animado", {
            opacity: 0,
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
            duration: 5,
            scrollTrigger: {
                trigger: ".image",
                start: 150
            }
        })

    }, [])
    const info = useContext(langCotext)
    return (
        <section id='inicio' className='header_section g-maxwidth-page '>
            <div className='texto_div'>
                <h1 className='texto_animado'>{info?.data.destacaHeader[0]}</h1>
                <p className='texto_animado2'>{info?.data.destacaHeader[1]}</p>
            </div>
            <div>
                <img className='image' src="/logo-pagina-png.png" alt="imagen" />
            </div>
        </section>
    )
}
