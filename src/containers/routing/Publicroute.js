import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Islogin } from './testlogin';

function Publicroute({ component:Component , restricted=true , ...test }) {
        if(Islogin){
            <Route
            {...test}
            />    
        } else{
            <Redirect to={"/H"}/>
        }
}

export default Publicroute;