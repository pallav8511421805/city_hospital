import React from 'react';
import { useSelector } from 'react-redux';

function Alert(props) {
    alert = useSelector(state => state.alert);
    console.log(alert);
    return (
        <div>
            
        </div>
    );
}

export default Alert;