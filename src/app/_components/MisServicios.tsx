import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'
import Tilt from 'react-parallax-tilt';
export const MisServicios = () => {

  const info = useContext(langCotext)
  if (!info) return null
  const servicios = info.data.misServicios
  const empecemos_redirigir = info.data.ids_component,
    id_services = info.data.ids_component
  return (
    <div id={`${id_services[7]}`} className='g-maxwidth-page '>
      <section className='section_title_info_servicios'>
        <h2>{servicios.titulo}</h2>
        <p className='g-subtitle-texts'>{servicios.sub_titulo}</p>
        <p className='g-subtitle-texts'>{servicios.titulo_ultimo}</p>
      </section>




      <section className='grid_services'>


        <Tilt className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={2500}
          glareEnable={true}
          glareMaxOpacity={0.45}>
          <div className='border-box-line-blue-my-services'>

            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[0]}</h2>
            <h2 className='titles_center'>{servicios.precios[0]}</h2>
            <p className='split_payment text_decorated'>{servicios.sub_titulo_servicio[0]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_basico.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <div className="container">
                      <p className={`${e.data_popup ? "hover-me" : ""}`}>{e.titulo}</p>
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
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>
        </Tilt>
          {/* SIN ANIMACION */}
          <div className='border-box-line-blue-my-services'>

            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[0]}</h2>
            <h2 className='titles_center'>{servicios.precios[0]}</h2>
            <p className='split_payment text_decorated'>{servicios.sub_titulo_servicio[0]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_basico.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <div className="container">
                      <p className={`${e.data_popup ? "hover-me" : ""}`}>{e.titulo}</p>
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
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>
        <Tilt className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={2500}
          glareEnable={true}
          glareMaxOpacity={0.45}>

          <div className='border-box-line-blue-my-services'>

            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[1]}</h2>
            <h2 className='titles_center'>{servicios.precios[1]}</h2>
            <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_comercial.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <p >{e.titulo}</p>
                  </div>
                ))
              }
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>
        </Tilt>
          <div className='border-box-line-blue-my-services'>

            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[1]}</h2>
            <h2 className='titles_center'>{servicios.precios[1]}</h2>
            <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_comercial.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <p >{e.titulo}</p>
                  </div>
                ))
              }
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>
        <Tilt className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={2500}
          glareEnable={true}
          glareMaxOpacity={0.45}>

          <div className='border-box-line-blue-my-services'>
            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[2]}</h2>
            <h2 className='titles_center'>{servicios.precios[2]}</h2>
            <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_amedida.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <p className=''>{e.titulo}</p>
                  </div>
                ))
              }
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>
        </Tilt>
          <div className='border-box-line-blue-my-services'>
            <div className='g-blur-blue-services'></div>
            <h2 className='titles_center'>{servicios.titulos_servicios[2]}</h2>
            <h2 className='titles_center'>{servicios.precios[2]}</h2>
            <p className='basic_plan-and-more'>{servicios.sub_titulo_servicio[1]}</p>
            <div className='div_ul-services'>
              {
                servicios.plan_amedida.map(e => (
                  <div key={e.id}>
                    <img style={{ height: "auto", width: "30px" }} src="/icono-tick-servicios.svg" alt="icon service" />
                    <p className=''>{e.titulo}</p>
                  </div>
                ))
              }
              <a className='g-element-scale-transition' href={`#${empecemos_redirigir[4]}`}>Reservar</a >
            </div>
          </div>

      </section >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Return />

      </div>
    </div >

  )
}
