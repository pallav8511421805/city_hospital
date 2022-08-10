import React, { createContext } from 'react';
import { Themetoggle } from './Actiontypes';
import { Themereducer } from './reducer/Theme.reducer';
const initval ={
    theme : 'light'
} 

export default ThemeContext;