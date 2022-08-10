import React, { createContext, useReducer } from 'react';
import { Themetoggle } from './Actiontypes';
import { Themereducer } from './reducer/Theme.reducer';
const initval = {
    theme: 'light'
}
export const ThemeContext = createContext();

function Themeprovider({ children }) {

    const [state, dispatch] = useReducer(Themereducer, initval);

    const Toogle_Theme = (val) => {
        let newtheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: Themetoggle, payload: newtheme })
    }

    return (
        <ThemeContext.Provider value={{ ...state, Toogle_Theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;