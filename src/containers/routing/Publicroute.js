import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from './testlogin';

function Publicroute({ component: Component, restricted = true, ...rest }) {
    return (
        <Route {...rest} 
        render={props => (
            isLogin && restricted === true ? 
         <Redirect to={"/H"} />
         : <Component  {...props}/>
        )} />
    )
}

export default Publicroute;