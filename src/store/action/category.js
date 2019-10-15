



import * as actions from './actionTypes' ; 
import axios from './../../axios' ; 



export const fetchCategory = () => {

   return  dispatch => {
       
         axios.get('/getCats')
              .then(response =>{
                    // console.log(`amir is here ` , response.data)
                    dispatch(fetchCategorySuccess(response.data))  ;  
               }) 
               .catch(error => {
                   // handleError
                   console.log( 'wht is error', error);  
               })                             
    }
}; 


export const fetchCategorySuccess = (data) => {
        return {
           data : data ,  
           type : actions.FETCH_CATEGORY_SUCCESS    
        }
}; 