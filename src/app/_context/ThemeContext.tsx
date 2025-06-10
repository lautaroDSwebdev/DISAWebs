"use client"
import { createContext, useState } from 'react'


interface Tema{
    ChangeTheme: () => void
    theme: string
}

export const ThemeContext = createContext<Tema>({
    ChangeTheme: () => {},
    theme: "light"

})

export const ThemeContextProvider = ({children} :{children: React.ReactNode} ) => {

    const [theme, settheme] = useState("dark")

    const ChangeTheme = () => { 
        settheme(e => (e  === "light" ? "dark" : "light"))

     }

  return (
    <ThemeContext.Provider value={{theme, ChangeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
