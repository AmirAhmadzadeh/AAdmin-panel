
import * as actions from './actionTypes' ; 
import axios from './../../axios' ; 



export const fetchCourse = () => {

   return  dispatch => {
         axios.get('/getCourses')
              .then(response =>{
                    dispatch(fetchCourseSuccess(response.data))  ;  
               }) 
               .catch(error => {
                   // handle errors
                   console.log( 'wht is error', error);  
               }) ;                           
    }
}; 


export const fetchCourseSuccess = (data) => {
        return {
           data : data ,  
           type : actions.FETCH_COURSES_SUCCESS    
        }
}; 


