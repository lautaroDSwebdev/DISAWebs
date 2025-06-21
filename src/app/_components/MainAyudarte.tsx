import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
import Tilt from 'react-parallax-tilt';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const Main = () => {
    // gsap.registerPlugin(useGSAP, SplitText);
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const info = useContext(langCotext)
    if (!info) return null
    const data = info.data.ids_component

    
    useEffect(() => {
        // let texto_div = SplitText.create(".texto_animado", {
        //     type: "chars "
        // });
        // gsap.from(texto_div.chars, {
        //     y: 50,       // animate from 100px below
        //     duration: 1,
        //     autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        //     stagger: {
        //         amount: .8,
        //         from: "end"
        //     } // 0.05 seconds between each
        // });
        gsap.from('.box_ayudarte', {
            scrollTrigger: {
                trigger: ".box_ayudarte",
                toggleActions: "restart"
            }, // start animation when ".box" enters the viewport
            x: -80,
            duration: 2,
            opacity: 0
        });
        gsap.to('.box_ayudarte', {
            scrollTrigger: {
                trigger: ".box_ayudarte",
                toggleActions: "play"
            }, // start animation when ".box" enters the viewport
            x: 0,
            duration: 2,
            opacity: 1
        });
        
        // gsap.from('.appear-left_element', {
        //     scrollTrigger: {
        //         trigger: ".appear-left_element",
        //         toggleActions: "play"
        //     }, // start animation when ".box" enters the viewport
        //     x: -50,
        //     duration: 2,
        //     delay: 1,
        //     opacity: 0
        // });
        // gsap.to('.appear-left_element', {
        //     scrollTrigger: {
        //         trigger: ".appear-left_element",
        //         toggleActions: "play"
        //     }, // start animation when ".box" enters the viewport
        //     x: 0,
        //     delay: 1,
        //     duration: 2,
        //     opacity: 1
        // });
        // gsap.from(".texto_animado", {
        //     opacity: 0,
        //     duration: 2.5,
        //     scrollTrigger: {
        //         trigger: ".texto_animado",
        //         start: 150
        //     }
        // })
    }, [])
    return (

        <div id={data[1]} className='div_center g-maxwidth-page div_ayudarte g-padding-top-sections'>
            <h2 className='texto_animado'>¿{info?.data.ayudarte[0]} <i className='text-blue '>{info?.data.ayudarte[1]}</i>?</h2>
            <p className='g-subtitle-texts texto_animado'>{info?.data.ayudarte[2]}</p>
            <section className='grid_help '>
                {
                    info?.data.grid_ayudarte.map(e => (
                        <Tilt key={e.id} className="box_ayudarte background-stripes parallax-effect-glare-scale g-card-animated-desk" perspective={500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}>
                            <div className='border-box-line-white size_box inner-element' key={e.id}>
                                <div className='blur_boxes'></div>

                                <p className='g-subtitle-texts appear-left_element'>{e.data}</p>

                                <div className='div_img appear-left_element'>
                                    <img src={e.img} alt="imagen" />
                                </div>
                            </div>
                        </Tilt>
                    ))
                }
                {
                    info?.data.grid_ayudarte.map(e => (

                        <div className='box_ayudarte border-box-line-white size_box inner-element g-card-animated-mobile' key={e.id}>
                            <div className='blur_boxes'></div>

                            <p className='g-subtitle-texts appear-left_element'>{e.data}</p>

                            <div className='div_img appear-left_element'>
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
