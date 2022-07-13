import React, { useContext, useState} from 'react';


const ThemeContext = React.createContext();

export const Theme = ()=>useContext(ThemeContext);

export const ThemeProvider = ({children})=>{

    const [darkMode, setDarkMode] = useState(false)
    const [openSubMenu, setOpenSubmenu] = useState(true)

    return (
    <ThemeContext.Provider value={{darkMode, setDarkMode, openSubMenu, setOpenSubmenu}}>
        { children}
    </ThemeContext.Provider>
    );
}
