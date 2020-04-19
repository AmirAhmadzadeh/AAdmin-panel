import * as actionTypes from './../action/actionTypes';

const auth = (state = { auth: false, error: false }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state, auth: true
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state, auth: false
            }
        default: return state
    }
}


export default auth;  