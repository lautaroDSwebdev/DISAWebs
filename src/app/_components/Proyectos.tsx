import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react'
export const Proyectos = () => {
    const info = useContext(langCotext)
    const [emblaRef] = useEmblaCarousel()
    return (
        <div id='Proyectos' className='div_component ' >
            Seccion en proceso 
            {/* revisar esta documentacion con generador 
            https://www.embla-carousel.com/examples/generator/
            */}
            {/* <article className='article_carrusel embla' ref={emblaRef}>

                <section className='embla__container' >
                    {
                        info?.data.carruselProyectos.map(e => (
                            <div className='div_carrusel border-box-line-white embla__slide' key={e.id} >
                                <a className='carrusel_a' target='_blank' href={e.href}  >
                                    <img src={e.img} alt={e.data} />
                                    <p >{e.data}</p>
                                </a>
                            </div>
                        ))
                    }
                </section>
            </article> */}
        </div >
    )
}
