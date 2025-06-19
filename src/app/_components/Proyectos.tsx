import React, { useContext } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { langCotext } from '../_context/LanguageContext'


export const Proyectos = () => {
    const option = {
        align: 'start',
        dragFree: true,
        loop: true,
        slidesToScroll: 'auto',
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()])
    const data = useContext(langCotext)
    if (!data) return null
    const dataProjects = data.data.carruselProyectos
    return (
        <section className='embla section_carrusel'>
            <div className='embla__viewport' ref={emblaRef}>
                <div className='embla__container section_div_carrusel'>
                    {dataProjects.map((item) => (
                        <div className='embla__slide div_slide' key={item.id}>
                            <div className='embla__slide__number div_carrusel_img'>
                                <img
                                    src={item.img}
                                    alt={item.data}
                                    className=''
                                />
                                <div className=''>
                                    {item.href && (
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className=''
                                            aria-label='Personal website'
                                        >
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

