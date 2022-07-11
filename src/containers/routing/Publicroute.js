import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Islogin } from './testlogin';

function Publicroute({ component: Component, restricted = true, ...test }) {
    return (
        <Route {...test} render={(props) => {
            if (Islogin) {
                return <Redirect to={"/H"} />;
            }
            return <Component {...props} />;
        }} />
    )
}

export default Publicroute;