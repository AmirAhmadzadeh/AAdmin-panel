import * as actionTypes from './../action/actionTypes';

<<<<<<< HEAD
import * as actionTypes from './../action/actionTypes' ;
 




const auth = (state = { auth:false, error:false } , action ) => {

    switch(action.type){ 
        case actionTypes.LOGIN_SUCCESS : 
            return{ 
                ...state , auth:true 
=======
const auth = (state = { auth: false, error: false }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state, auth: true
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state, auth: false
>>>>>>> e6ef226b4af024c7135f9a25fd4ba073ab703de6
            }
        default: return state
    }
}


export default auth;  