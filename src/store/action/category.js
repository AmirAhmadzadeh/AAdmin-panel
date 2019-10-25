



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


// making new cat  


export const makeNewCat = (data) => {
    return dispatch => {
        axios.post('/makeNewCat' , {...data})
             .then(response=> {
                    console.log(`heyyyy ${response.data}`) ;
                    
                    dispatch(makeNewCatSuccessed()) ; 
                    dispatch(fetchCategory()) ;
             })  
             .catch(err => { 
                console.log(`some errors occured in making new Cat action`) ;  
             })  
    } 
}


export const makeNewCatSuccessed = () =>  ( { type:actions.MAKE_CATEGORY_SUCCESS } ) ; 




export const deleteCat = (id) => {
    return dispatch => {
        
        axios.delete(`/deleteCat/${id}`)
             .then(response=> {
                    console.log(`heyyyy ${response.data}`) ;
                    
                    dispatch(deleteCatSuccessed()) ; 
                    dispatch(fetchCategory()) ;
             })  
             .catch(err => { 
                console.log(`some errors occured in making new Cat action`) ;  
             })  
    } 
}

export const deleteCatSuccessed = () =>  ( { type:actions.delete_CATEGORY_SUCCESS } ) ; 
