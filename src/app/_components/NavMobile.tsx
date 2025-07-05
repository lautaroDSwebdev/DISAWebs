import React, { useContext, useState } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
export const NavMobile = () => {
    const data = useContext(langCotext)
    if (!data) return null
    const id_comback = data.data.ids_component
    const lista_nav = data.data.nav_data
    // logo-pagina-png.png


    const [state, setState] = useState(false)


    return (
        <section className='nav_mobile'>
            <div className='options_top g-bgwhite-opacity'>
                <a href={`#${id_comback[0]}`}>

                    <img src="logo-pagina-png.png" alt="" />
                </a>
                <button onClick={() => setState(!state)}>
                    <GiHamburgerMenu />
                </button>
            </div>

            <div className={`div_select g-blur-bg ${state ? "mobile_options_open" : "mobile_options"}`}>

                <nav>
                    {lista_nav.map(e => (
                        <a onClick={() => setState(!state)} key={e.id} href={e.href}>{e.data}</a>
                    ))}
                </nav>
                <select className='btn_lang' onChange={data?.HandleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <div className='div_svg_close'>

                    <CgClose onClick={() => setState(!state)} />
                </div>
            </div>


        </section>
    )
}
