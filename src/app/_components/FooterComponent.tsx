import React, { useContext } from 'react'
import { FaRegClock } from "react-icons/fa";
import { langCotext } from '../_context/LanguageContext';
export const FooterComponent = () => {


  const info = useContext(langCotext)
  if (!info) return null
  const ids = info.data.ids_component
  const dataFooter = info.data.fotterInfo,
    titleFooter = dataFooter.title,
    hourInfo = dataFooter.hours,
    contactInfo = dataFooter.contact,
    copyright = dataFooter.copyright


  return (
    <section className='g-padding-top-sections'>

      <div className='div_footer '>
        <div className='ball-blur-right-footer'></div>
        <div className='ball-blur-left-footer'></div>
        <section className=' section_footer'>
          <div>
            <h2>{titleFooter}</h2>
            <p className='info_hours'><FaRegClock />{hourInfo}</p>
            {/* <a href={`#${ids[0]}`}>regresar al inicio</a> */}
          </div>
          <div className='div_contact'>
            {
              contactInfo.map(e => (
                <a key={e.id} href={e.url} target='_blank'>
                  <img src={e.icon} alt={e.text} />
                  <b>{e.text}</b>
                </a>
              ))
            }
          </div>
        </section>
        <div className='div_copyright'>
          <p>{copyright}</p>
        </div>
      </div>
    </section>
  )
}
