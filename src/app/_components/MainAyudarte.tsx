import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { Return } from './Return'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Tilt from 'react-parallax-tilt';
// import './ParallaxEffectGlareScale.demozap.css';
export const Main = () => {
    gsap.registerPlugin(useGSAP, SplitText);
    const info = useContext(langCotext)
    if (!info) return null
    const data = info.data.ids_component

    useEffect(() => {
        gsap.from(".texto_animado", {
            opacity: 0,
            duration: 2.5,
            scrollTrigger: {
                trigger: ".texto_animado",
                start: 150
            }
        })
    }, [])
    return (

        <div id={data[1]} className='div_center g-maxwidth-page div_ayudarte g-padding-top-sections'>
            <h2>¿{info?.data.ayudarte[0]} <i className='text-blue'>{info?.data.ayudarte[1]}</i>?</h2>
            <p className='g-subtitle-texts'>{info?.data.ayudarte[2]}</p>
            <section className='grid_help'>
                {
                    info?.data.grid_ayudarte.map(e => (
                        <Tilt className="background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}>
                            <div className='border-box-line-white size_box inner-element' key={e.id}>
                                <div className='blur_boxes'></div>

                                <p className='g-subtitle-texts'>{e.data}</p>

                                <div className='div_img'>
                                    <img src={e.img} alt="imagen" />
                                </div>
                            </div>
                        </Tilt>
                    ))
                }
                {
                    info?.data.grid_ayudarte.map(e => (
                        
                            <div className='border-box-line-white size_box inner-element g-card-animated-mobile' key={e.id}>
                                <div className='blur_boxes'></div>

                                <p className='g-subtitle-texts'>{e.data}</p>

                                <div className='div_img'>
                                    <img src={e.img} alt="imagen" />
                                </div>
                            </div>
                    ))
                }
            </section>
            {/* <Return /> */}
        </div>
    )
}
