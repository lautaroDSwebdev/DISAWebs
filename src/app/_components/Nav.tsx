"use client"
import { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import { SplitText } from 'gsap/all';
export const Nav = () => {
    const data = useContext(langCotext)
    if (!data) return null
    const id_comback = data.data.ids_component
    gsap.registerPlugin(useGSAP, SplitText);

    useEffect(() => {
        let texto_div = SplitText.create("section_nav a", {
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
    }, [])
    return (
        <section className={`section_nav g-lightblue-bg `}>
            <nav className='g-maxwidth-page '>
                <div>
                    <a href={`#${id_comback[0]}`}>
                        <img src="/logo-pagina-png.png" alt="" />
                    </a>
                </div>
                <select className='btn_lang' onChange={data?.HandleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                {
                    data?.data.nav_data.map(e => (
                        <a className='nav_a' key={e.id} href={e.href}>{e.data}</a>
                    ))
                }

            </nav>
        </section>
    )
}
