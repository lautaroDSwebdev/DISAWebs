import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'

export const HagoRealidadProyectos = () => {

  const info = useContext(langCotext)
  return (
    <div id='Sobre Mi' className='div_making-reality-projects g-maxwidth-page' >
      <section className='section_img_reality-projects'>
        <img src="/imagen_hago-realidad-tus-ideas.png" alt="imagen" />
      </section>

      <section>
        <h2>{info?.data.makingRealityYourProject.title[0]}</h2>
        <h2 className='title_blue'>{info?.data.makingRealityYourProject.title[1]}</h2>
      </section>
      <section className='section_stats_about-me'>
        <div>
          <img src="/smile.svg" alt="" />
            <b><i>+</i>10</b>
            <b className='section_b'>{info?.data.makingRealityYourProject.text_icons[0]}</b>
        </div>
        <div>
          <img src="/people.svg" alt="" />
          <b>1</b>
          <b className='section_b'>{info?.data.makingRealityYourProject.text_icons[1]}</b>
        </div>
        <div>
          <img src="/computer.svg" alt="" />
          <b><i>+</i>10.000</b>
          <b className='section_b'>{info?.data.makingRealityYourProject.text_icons[2]}</b>
        </div>
      </section>
     <Return/>
    </div>
  )
}
