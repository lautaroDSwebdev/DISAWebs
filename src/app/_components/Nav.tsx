import React from 'react'
import { nav_data } from '../_mock'

export const Nav = () => {



    return (
        <section className='section_nav g-lightblue-bg'>
            <nav className='g-maxwidth-page '>
                <div>
                    <a href="">
                        <img src="/logo-pagina-png.png" alt="" />
                    </a>
                </div>
                {
                    nav_data.map(e => (
                        <a className='' key={e.id} href={e.href}>{e.data}</a>
                    ))
                }
                <div>
                    opciones
                </div>
            </nav>
        </section>
    )
}
