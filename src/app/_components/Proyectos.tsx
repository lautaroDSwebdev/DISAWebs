import React, { useContext, useEffect } from 'react'
// import Autoplay from 'embla-carousel-autoplay'
// import useEmblaCarousel from 'embla-carousel-react'
import { langCotext } from '../_context/LanguageContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
export const Proyectos = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        gsap.from(".section_container_carrusel ", {
            scrollTrigger: {
                trigger: ".section_container_carrusel ",
                // start: 50
                toggleActions: "restart"
            },
            opacity: 0,
            y: -50,
            duration: 3,
        })
        gsap.to(".section_container_carrusel ", {
            scrollTrigger: {
                trigger: ".section_container_carrusel ",
                // start: 50
                toggleActions: "play"
            },
            opacity: 1,
            y: 0,
            duration: 3,
        })

    }, [])
    const data = useContext(langCotext)
    if (!data) return null
    const id_component = data.data.ids_component
    const dataProjects = data.data.carruselProyectos,
        listaProyectos = dataProjects.listaProyectos,
        titulo = dataProjects.titulo
    return (

        <section id={`${id_component[5]}`} className='section_container_carrusel g-padding-top-sections g-maxwidth-page'>
            <h2>{titulo}</h2>
            <div className='div_relative_blur'>
            <div className='g-blur-blue-projects'></div>

                <Slider {...settings} className='div_slider-proyectos'>
                    {listaProyectos.map((e) => (
                        <section key={e.id} className='section_carrusel'>
                            <a href={e.href} target='_blank' className='div_carrusel_img'>
                                <img
                                    src={e.img}
                                    alt={e.data}
                                    className=''
                                />
                            </a>
                            <div className='div_button_proyectos'>

                                <a className='button_carrusel'
                                    target='_blank'
                                    href={e.href}>
                                    {e.data}
                                </a>
                            </div>
                        </section>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

