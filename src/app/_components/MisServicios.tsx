import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import Tilt from 'react-parallax-tilt';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';


export const MisServicios = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsap.registerPlugin(useGSAP, SplitText);


  const info = useContext(langCotext)
  if (!info) return null
  const servicios = info.data.misServicios
  const empecemos_redirigir = info.data.ids_component,
    id_services = info.data.ids_component


  useEffect(() => {
    let texto_div = SplitText.create(".texto_animado", {
      type: "chars,words"
    });
    gsap.from(texto_div.chars, {
      y: 50,       // animate from 100px below
      duration: 1,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      scrollTrigger: {
        trigger: ".texto_animado",
        toggleActions: "restart"
        ,
      },
      stagger: {
        amount: .8,
        from: "end"
      } // 0.05 seconds between each
    });

    gsap.from(".appear_services animation_image_style", {
      scrollTrigger: {
        trigger: ".appear_services animation_image_style",
        toggleActions: "restart"
      },
      opacity: 0,
      x: -50,
      duration: 2,
    })
    gsap.to(".appear_services animation_image_style", {
      scrollTrigger: {
        trigger: ".appear_services animation_image_style",
        toggleActions: "play"
      },
      opacity: 1,
      x: 0,
      duration: 2,
    })



  }, [])
  return (
    <div id={`${id_services[7]}`} className='g-maxwidth-page g-padding-top-sections'>
      <section className='section_title_info_servicios'>
        <h2 className='texto_animado'>{servicios.titulo}</h2>
        <p className='g-subtitle-texts texto_animado'>{servicios.sub_titulo}</p>
        <p className='g-subtitle-texts texto_animado'>{servicios.titulo_ultimo}</p>
      </section>




      <section className='grid_services'>


        <div className='border-box-line-blue-my-services  appear_services animation_image_style'>

          <div className='g-blur-blue-services'></div>
          <h2 className='titles_center animation_color_title'>{servicios.titulos_servicios[0]}</h2>
          <h2 className='titles_center animation_color_title'>{servicios.precios[0]}</h2>
          <p className='split_payment text_decorated'>{servicios.sub_titulo_servicio[0]}</p>
          <div className='div_div_list-services'>

            <div className='div_ul-services'>
              {
                servicios.plan_basico.map(e => (
                  <div key={e.id}>
                    <img src="/icono-tick-servicios.svg" alt="icon service" />
                    <div className="container">
                      <p className={` title_service ${e.data_popup ? "hover-me" : ""}`}>{e.titulo}</p>
                      {
                        e.data_popup &&
                        <div className="tooltip">
                          <p>{e.data_popup}</p>
                        </div>
                      }
                    </div>
                  </div>
                ))
              }
              <div className='div_services_reservar_a'>

                <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
              </div>
            </div>
          </div>
        </div>

        {/* SIN ANIMACION */}
        <div className='border-box-line-blue-my-services appear_services animation_image_style'>

          <div className='g-blur-blue-services'></div>
          <h2 className='titles_center'>{servicios.titulos_servicios[1]}</h2>
          <h2 className='titles_center'>{servicios.precios[1]}</h2>
          <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
          <div className='div_div_list-services'>

            <div className='div_ul-services'>
              {
                servicios.plan_comercial.map(e => (
                  <div key={e.id}>
                    <img src="/icono-tick-servicios.svg" alt="icon service" />
                    <p className='title_service'>{e.titulo}</p>
                  </div>
                ))
              }
              <div className='div_services_reservar_a'>

                <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
              </div>
            </div>
          </div>
        </div>

        {/* SIN ANIMACION */}
        <div className='border-box-line-blue-my-services  appear_services animation_image_style'>
          <div className='g-blur-blue-services'></div>
          <h2 className='titles_center'>{servicios.titulos_servicios[2]}</h2>
          <h2 className='titles_center'>{servicios.precios[2]}</h2>
          <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
          <div className='div_div_list-services'>

            <div className='div_ul-services'>
              {
                servicios.plan_amedida.map(e => (
                  <div key={e.id}>
                    <img src="/icono-tick-servicios.svg" alt="icon service" />
                    <p className='title_service'>{e.titulo}</p>
                  </div>
                ))
              }
              <div className='div_services_reservar_a'>

                <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
              </div>
            </div>
          </div>
        </div>

      </section >

    </div >

  )
}
