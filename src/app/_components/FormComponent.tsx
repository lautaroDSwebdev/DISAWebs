import React, { useContext, useEffect } from 'react'
import { langCotext } from '../_context/LanguageContext'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
export const FormComponent = () => {
    const [state, handleSubmit] = useForm('mgvydley');
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const info = useContext(langCotext)


    console.log(state)
    if (!info) return null
    const form_info = info.data.form,
        id_contact = info.data.ids_component
        useEffect(()=> {


            gsap.from(".div_form   ", {
                scrollTrigger: {
                    trigger: ".div_form   ",
                    // start: 50
                    toggleActions: "restart"
                },
                opacity: 0,
                x: 50,
                duration: 2,
            })
            gsap.to(".div_form   ", {
                scrollTrigger: {
                    trigger: ".div_form   ",
                    // start: 50
                    toggleActions: "play"
                },
                opacity: 1,
                x: 0,
                duration: 2,
            })
    
    
    
        },[])
    return (
        <div className='g-padding-top-sections'>

            <div id={id_contact[8]} className='g-maxwidth-page div_form '>
                <h2>Consultanos</h2>
                <form onSubmit={handleSubmit} className='border-box-line-blue-form blur-blue-how-work g-boxshadow-blue' >
                    <label htmlFor="nombre">{form_info.label[0]}</label>
                    <input id='nombre' name='nombre' type="text" />

                    <label htmlFor="mail">{form_info.label[1]}</label>
                    <input id='mail' name='mail' type="email" />

                    <label htmlFor="telefono">{form_info.label[2]}</label>
                    <input id='telefono' name='telefono' type="text" />

                    <label htmlFor="plan">{form_info.label[3]}</label>
                    <select name='plan' >
                        <option value={form_info.opcions[0]}>{form_info.opcions[0]}</option>
                        <option value={form_info.opcions[1]}>{form_info.opcions[1]}</option>
                        <option value={form_info.opcions[2]}>{form_info.opcions[2]}</option>
                    </select>
                    <textarea name='mensaje' placeholder={form_info.textArea} />
                    <button onClick={()=> toast.success("Pedido enviado ✅")} type="submit" disabled={state.submitting}>Enviar</button>
                </form>
                
            </div>
        </div>
    )
}
