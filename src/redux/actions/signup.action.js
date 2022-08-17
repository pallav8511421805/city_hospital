import * as ActionTypes from '../actiontypes';

export const signupaction = (values) => (dispatch) =>{
dispatch({type:ActionTypes.SIGN_UP,payload:values});
} 