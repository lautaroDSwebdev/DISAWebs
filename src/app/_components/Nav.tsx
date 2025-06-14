"use client"
import { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'
export const Nav = () => {
    const data = useContext(langCotext)
    if(!data) return null
    const id_comback = data.data.ids_component
    return (
        <section className={`section_nav g-lightblue-bg `}>
            <nav className='g-maxwidth-page '>
                <div>
                    <a href={`#${id_comback[0]}`}>
                        <img src="/logo-pagina-png.png" alt="" />
                    </a>
                </div>
                <select className='btn_lang'  onChange={data?.HandleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                {
                    data?.data.nav_data.map(e => (
                        <a className='' key={e.id} href={e.href}>{e.data}</a>
                    ))
                }
                
            </nav>
        </section>
    )
}
