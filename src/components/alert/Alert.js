import React from 'react';
import { useSelector } from 'react-redux';

function Alert(props) {
    let alertdata = useSelector(state => state.alert);
    console.log(alertdata);
    return (
        <div>

        </div>
    );
}

export default Alert;