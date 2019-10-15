
import * as actions from './actionTypes' ; 
import axios from './../../axios' ; 



export const fetchmenu = () => {

   return  dispatch => {
         axios.get('/menu')
               .then(response =>{
                    dispatch(fetchSuccess(response.data.menus))  ;  
               }) ;                              
    }
}


export const fetchSuccess = (data) => {

        return {
           data : data ,  
           type : actions.FETCH_MENUS_SUCCESS    
        }
}