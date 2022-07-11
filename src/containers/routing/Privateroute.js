import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from './testlogin';

function Privateroute({ component:Component , restricted=true , ...rest }) {
    return (
        <Route {...rest} 
        render={props => (
            isLogin ? <Component  {...props}/>
         : <Redirect to={"/Login"} />
        )} />
    )
}

export default Privateroute;