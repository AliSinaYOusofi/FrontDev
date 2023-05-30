"use client";

import { createContext, useContext, useState } from "react";

export const appContext = createContext();

const NextContextProvider = ({children}) => {

    const [theme, setTheme] = useState(true); // dark theme

    return (
        <appContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useNextContext = () => useContext(appContext)

export default NextContextProvider;