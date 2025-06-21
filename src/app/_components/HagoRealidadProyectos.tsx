import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const HagoRealidadProyectos = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsap.registerPlugin(useGSAP, SplitText);
  const info = useContext(langCotext)
  if (!info) return null
  const id_comeback = info?.data.ids_component
  useEffect(() => {
    let texto_div = SplitText.create(".section_img_reality-projects", {
      type: "chars,words "
  });
  gsap.from(texto_div.chars, {
      y: 50,       // animate from 100px below
      duration: 1,
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: {
          amount: .8,
          from: "end"
      } // 0.05 seconds between each
  });
    gsap.from(".div_making-reality-projects ", {
        scrollTrigger: {
            trigger: ".div_making-reality-projects ",
            // start: 50
            toggleActions: "restart"
        },
        opacity: 0,
        x: -50,
        duration: 2,
    })
    gsap.to(".div_making-reality-projects ", {
        scrollTrigger: {
            trigger: ".div_making-reality-projects ",
            // start: 50
            toggleActions: "play"
        },
        opacity: 1,
        x: 0,
        duration: 2,
    })

}, [])

  return (
    <div className='g-padding-top-sections'>

      <div id={`${id_comeback[3]}`} className='div_making-reality-projects g-maxwidth-page ' >
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
            <b><i>+</i>10k</b>
            <b className='section_b'>{info?.data.makingRealityYourProject.text_icons[2]}</b>
          </div>
        </section>
      </div>
    </div>
  )
}
