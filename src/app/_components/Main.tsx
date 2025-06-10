import React, { useContext } from 'react'
import { langCotext } from '../_context/LanguageContext'

export const Main = () => {
    const info = useContext(langCotext)
  return (
    <div id='Ayudarte' className='div_main'>
        <h2>¿{info?.data.ayudarte[0]} <i className='text-blue'>{info?.data.ayudarte[1]}</i>?</h2>
        <p>{info?.data.ayudarte[2]}</p>
    </div>
  )
}
