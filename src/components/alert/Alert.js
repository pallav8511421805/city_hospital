import React from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack'

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    let alertdata = useSelector(state => state.alert);
    console.log(alertdata);
    return (
        <div>

        </div>
    );
}

export default Alert;