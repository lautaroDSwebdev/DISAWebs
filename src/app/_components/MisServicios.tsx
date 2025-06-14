import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'

export const MisServicios = () => {

  const info = useContext(langCotext)
  if (!info) return null
  const servicios = info.data.misServicios
  const empecemos_redirigir = info.data.ids_component,
    id_services = info.data.ids_component
  return (
    <div id={`${id_services[7]}`} className='g-maxwidth-page '>
      <section>
        <h2>{servicios.titulo}</h2>
        <p className='g-subtitle-texts'>{servicios.sub_titulo}</p>
        <p className='g-subtitle-texts'>{servicios.titulo_ultimo}</p>
      </section>
      <section className='grid_services'>
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
            {/* <div className="container">
              <span className="hover-me">Hover me !</span>
              <div className="tooltip">
                <p>mkbmfdkbmfdkmbkfdmbkfkf
                  bdmbkdfbkmfdkbmdk
                  bmfdnhvdfvdfvdfvdfgngh</p>
              </div>
            </div> */}

            <a href={`#${empecemos_redirigir[4]}`}>Reservar</a >
          </div>
        </div>
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
            <a href={`#${empecemos_redirigir[4]}`}>Reservar</a >
          </div>
        </div>

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
            <a href={`#${empecemos_redirigir[4]}`}>Reservar</a >
          </div>
        </div>

      </section >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Return />

      </div>
    </div >

  )
}
