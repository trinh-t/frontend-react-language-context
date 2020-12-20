import React, { createContext, useState } from 'react';

export const LangContext = createContext();

function LangContextProvider({children}) {
    let [language, toggleLanguage] = useState('nl');

    function setLanguage() {
        if (language === 'nl') {
            toggleLanguage('es')
        } else {
            toggleLanguage('nl')
        }
    }

    const data = {
        language,
        setLanguage,
    }

    return (
        <LangContext.Provider value={data} >
            {children}
        </LangContext.Provider>
    );
}

export default LangContextProvider;