import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Islogin } from './testlogin';

function Privateroute({ component:Component , restricted=true , ...test }) {
    return (
        <Route {...test} 
        render={props => (
         Islogin ? <Component  {...props}/>
         : <Redirect to={"/Login"} />
        )} />
    )
}

export default Privateroute;