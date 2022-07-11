import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Islogin } from './testlogin';

function Publicroute({ component: Component, restricted = true, ...test }) {
    return (
        <Route {...test} 
        render={props => (
         Islogin && restricted === true ? 
         <Redirect to={"/H"} />
         : <Component  {...props}/>
        )} />
    )
}

export default Publicroute;