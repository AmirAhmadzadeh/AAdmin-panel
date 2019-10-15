import * as actionTypes from './../action/actionTypes' ;
 

const initState = {
    categories : null 
} 



const categoryReducer = (state = initState , action ) => {

    switch (action.type) { 
      
        case actionTypes.FETCH_CATEGORY_SUCCESS: {
            console.log(`YESYYYYYY`) ;    
            return {
                ...state  , 
                categories : action.data  
            }
        }
        default :
         return {
            ...state 
        }
    }

} 


export default categoryReducer  ;  