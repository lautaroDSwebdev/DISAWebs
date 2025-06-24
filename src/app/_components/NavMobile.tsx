import React, { useContext, useState } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { GiHamburgerMenu } from "react-icons/gi";
export const NavMobile = () => {
    const data = useContext(langCotext)
    if (!data) return null
    const id_comback = data.data.ids_component
    const lista_nav = data.data.nav_data
    // logo-pagina-png.png


    const [state, setState] = useState(false)


    return (
        <section className='nav_mobile'>
            <div className='options_top'>
                <img src="logo-pagina-png.png" alt="" />
                <button onClick={() => setState(!state)}>
                    <GiHamburgerMenu />
                </button>
            </div>

            <div className={`div_select ${state ? "mobile_options_open" : "mobile_options"}`}>
                <select className='btn_lang' onChange={data?.HandleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>

                <nav>
                    {lista_nav.map(e => (
                        <a onClick={() => setState(!state)} key={e.id} href={e.href}>{e.data}</a>
                    ))}
                </nav>
            </div>


        </section>
    )
}
