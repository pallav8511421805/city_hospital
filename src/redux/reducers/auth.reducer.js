import * as ActionTypes from '../actiontypes';

const initval = {
    isload: false,
    user: null,
    error: ''
}
export const authreducer = (state = initval, action) => {
    switch (action.type) {

        case ActionTypes.SIGNED_IN:
            return {
                ...state,
                isload: false,
                user: action.payload,
                error: ''
            }

        default:
            return state;
    }
} 