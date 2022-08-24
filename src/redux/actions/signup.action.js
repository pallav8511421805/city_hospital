import * as ActionTypes from '../actiontypes';

export const signupaction = (values) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP, payload: values });
}

export const signinaction = (values) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_IN, payload: values });
} 