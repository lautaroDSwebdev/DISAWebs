import React, { useContext } from 'react'
import { FiArrowUpCircle } from "react-icons/fi";
import { langCotext } from '../_context/LanguageContext';
export const ArrowUp = () => {
     const info = useContext(langCotext)
         if(!info) return null
         const id_inicio  = info?.data.ids_component
    return (
        <a href={`#${id_inicio[0]}`} className='arrow_style flex md:hidden'>
            <FiArrowUpCircle className='g-scroll-animated' />
        </a>

    )
}