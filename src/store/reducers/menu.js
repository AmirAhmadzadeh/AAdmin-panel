import * as actionTypes from './../action/actionTypes' ;
 

const initState = {
    menus : null 
} 



const menuReducer = (state = initState , action ) => {

    switch (action.type) { 

        case actionTypes.FETCH_MENUS_SUCCESS: {
            return {
                ...state  , 
                menus : action.data  
            }
        }
        default :
         return {
            ...state 
        }
    }

} 


export default menuReducer  ;  