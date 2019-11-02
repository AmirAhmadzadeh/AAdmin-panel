
import axios from '../../axios/index';
import * as  actionTypes from './actionTypes' ; 

export const login = (email,pass) => {

    return dispatch => {
        axios.post( '/login', { email, password:pass })
            .then(response => {

                    localStorage.setItem('token' ,response.data.data.token) ;
                    dispatch(logInSuccess())   ; 
            })
            .catch(err => {
                console.log('Im in error', err);
            })  
    }

}

// export const  checkIsAdmin = () => { 

// }

export const  logInSuccess  = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS ,  
        status:true     
    }
}   