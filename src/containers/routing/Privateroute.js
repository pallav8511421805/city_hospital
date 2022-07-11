import React from 'react';
import { Route } from 'react-router-dom';
import { Islogin } from './testlogin';

function Privateroute({ component:Component , restricted=true , ...test }) {
    if(Islogin && restricted){
        <Route
        {...test}
        />    
    } else{
        <Component />
    }
}

export default Privateroute;